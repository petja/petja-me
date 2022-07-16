import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import useSWR from 'swr'

import { Topbar } from '../components/Topbar'
import { Container } from '../components/Container'

const skills = [
  {
    name: 'Belly flying',
  },
  {
    name: 'Back flying',
  },
  {
    name: 'Belly carving',
  },
  {
    name: 'Barrel rolls',
  },
  {
    name: 'Knee flying',
  },
  {
    name: 'Sit flying',
  },
  {
    name: 'Belly-back-belly transitions',
  },
  {
    name: 'The very basics of head down',
  },
]

const skillsUpcoming = [
  {
    name: 'Back carving',
  },
  {
    name: 'Layouts',
  },
  {
    name: 'Dynamic flying',
  },
]

const hours = 16

export default function Tunnel() {
  const { data, error } = useSWR(
    'https://fooni-scraper.petja.workers.dev/',
    fetch
  )

  const [latestVideo, setLatestVideo] = useState<{
    title: string
    date: string
    posterUrl: string
    downloadUrl: string
  } | null>()

  useEffect(() => {
    if (data && !data.bodyUsed) {
      data.json().then((data) => {
        setLatestVideo(data.latestVideo)
      })
    }
  }, [data])

  return (
    <>
      <Head>
        <title>Tunnel Flying - Petja Touru</title>
      </Head>
      <Topbar
        heading="Tunnel flying"
        subtitle="Last updated on July 15, 2022"
      />
      <Container className="space-y-8 pb-20 animate-fadeInUp">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg title">📽 Latest video</h1>
            {latestVideo ? (
              <>
                <span>
                  Video recorded at
                  <br />
                  {new Date(latestVideo.date).toLocaleString(['en'], {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
                  })}
                </span>
                <a href={latestVideo.downloadUrl} target="_newtab">
                  View video &rarr;
                </a>
              </>
            ) : error ? (
              <p>Could not retrieve latest video 😞</p>
            ) : (
              <p>Loading video ...</p>
            )}
          </div>
          {latestVideo ? (
            <div>
              <a href={latestVideo.downloadUrl} target="_newtab">
                <Image
                  src={latestVideo.posterUrl}
                  alt="Latest video"
                  width="300"
                  height="168"
                  className="rounded-xl"
                />
              </a>
            </div>
          ) : (
            <div className="inline-block bg-slate-500 w-[300px] h-[168px] rounded-xl"></div>
          )}
        </div>

        <h1 className="font-bold text-lg title">Stats</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 dark:text-slate-300">
          <div>
            ⏱ Currently I have had around{' '}
            <span className="text-xl font-bold block title">{hours} hours</span>{' '}
            of time in a tunnel
          </div>

          <div>
            🥇 Top Coach
            <span className="text-xl font-bold block title">@aarohilli</span>
            with &asymp;3 hours of coaching
          </div>
        </div>

        <h1 className="font-bold text-lg title">Learned so far</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li key={skill.name}>✅ {skill.name}</li>
          ))}
        </ul>

        <h1 className="font-bold text-lg title">Coming up</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skillsUpcoming.map((skill) => (
            <li key={skill.name}>🟡 {skill.name}</li>
          ))}
          <li className="text-slate-500 italic">This ain&apos;t the end :)</li>
        </ul>

        <div className="flex gap-4 border-y border-y-slate-300 dark:border-y-slate-700 py-4">
          <Image
            src="/social/instagram.svg"
            height="24"
            width="24"
            alt="Instagram logo"
          />
          <div>
            Follow my learning path on my{' '}
            <a href="https://instagram.com/petjato" target="_newtab">
              Instagram
            </a>{' '}
            stories
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div>
              But what is <em>tunnel flying</em>?
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Vertical_wind_tunnel#Recreational_vertical_wind_tunnels"
              target="_newtab"
            >
              Head to Wikipedia &rarr;
            </a>
          </div>

          <div className="flex flex-col">
            <div>Want to start a new hobby right in Helsinki downtown?</div>
            <a href="https://shop.xn--fni-snaa.fi/catalog_5" target="_newtab">
              Fly in Fööni &rarr;
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}
