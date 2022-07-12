import fetch, { Headers } from 'cross-fetch'
import cookie from 'cookie'
import { parse } from 'node-html-parser'
import { DateTime } from 'luxon'

const loginURL = `https://media.xn--fni-snaa.fi/index.php?ctrl=api&do=proflyer_login&login_token=${process.env.MEDIA_FOONI_LOGIN_TOKEN}`

const listingURL = 'https://media.xn--fni-snaa.fi/proflyer'

const fileNameRegex =
  /^Fooni_.*_Bottom_\d*_(\d{4})-(\d\d)-(\d\d)_(\d\d)-(\d\d)-(\d\d)$/

export async function retrieveSessionId(): Promise<string> {
  console.log('Signing in to media.fööni.fi ...')

  const response = await fetch(loginURL, {
    redirect: 'manual',
  })

  const cookieStr = response.headers.get('set-cookie')

  if (!cookieStr) {
    throw new Error('No "set-cookie" header present on response, aborting ...')
  }

  const { Tunn3lMedia: sessionId } = cookie.parse(cookieStr)

  if (!sessionId) {
    throw new Error('No "Tunn3lMedia" cookie present on response, aborting ...')
  }

  return sessionId
}

export async function setFilter(
  sessionId: string,
  filterName: string,
  filterValue: string
) {
  console.log(`Setting filter "${filterName}" to value "${filterValue}" ...`)

  const headers = new Headers()

  headers.set('Cookie', `Tunn3lMedia=${sessionId}`)

  const url = new URL('https://media.xn--fni-snaa.fi/index.php')
  url.searchParams.set('ctrl', 'do')
  url.searchParams.set('do', 'set_filter')
  url.searchParams.set('namespace', 'proflyer')
  url.searchParams.set('filter_name', filterName)
  url.searchParams.set('filter_value', filterValue)

  console.log(url.href)

  await fetch(url.href, {
    headers,
    credentials: 'include',
  })
}

export async function listVideos(sessionId: string) {
  console.log('Listing videos ...')

  const headers = new Headers()

  headers.set('Cookie', `Tunn3lMedia=${sessionId}`)

  const response = await fetch(listingURL, {
    headers,
    credentials: 'include',
  })

  const videosHTML = await response.text()

  const document = parse(videosHTML)

  const imgEls = document.querySelectorAll(
    'div.media_container_responsive > img'
  )

  const output: {
    title: string
    date: string
    downloadUrl: string
    posterUrl: string
  }[] = []

  for (const element of imgEls) {
    const title = element.parentNode.parentNode
      .querySelector('.media_container_responsive_title')
      ?.innerText.trim()

    const match = title?.match(fileNameRegex)

    if (!title || !match) {
      continue
    }

    const posterUrl = new URL(element.attributes['src'])
    const mediaHost = posterUrl.hostname
    const mediaToken = posterUrl.searchParams.get('media_token')

    const downloadUrl = new URL(
      `https://${mediaHost}/player.php?site_id=fooni&media_token=${mediaToken}`
    )

    const date = DateTime.fromObject({
      year: +match[1],
      month: +match[2],
      day: +match[3],
      hour: +match[4],
      minute: +match[5],
      second: +match[6],
    }).setZone('Europe/Helsinki', {
      keepLocalTime: true,
    })

    output.push({
      title,
      date: date.toISO(),
      downloadUrl: downloadUrl.href,
      posterUrl: posterUrl.href,
    })
  }

  return output
}
