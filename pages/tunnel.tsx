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
    name: 'Vertical big-way',
  },
  {
    name: 'Dynamic flying',
  },
]

const hours = 15
const costPerHour = 590

export default function Tunnel() {
  const { data, error } = useSWR('/api/fooni_video', fetch)
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
        subtitle="Last updated on July 10, 2022"
      />
      <Container className="space-y-8 pb-20 animate-fadeInUp">
        {latestVideo ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg text-white">Latest video</h1>
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
            </div>
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
          </div>
        ) : error ? (
          <p>Could not retrieve latest video 😞</p>
        ) : (
          <p>Loading video ...</p>
        )}

        <h1 className="font-bold text-lg text-white">Stats</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-300">
          <div>
            Currently I have had around{' '}
            <span className="text-xl font-bold block text-white">
              {hours} hours
            </span>{' '}
            of time in a tunnel
          </div>

          <div>
            This have cost me around{' '}
            <span className="text-xl font-bold block text-white">
              {((hours * costPerHour) / 1_000).toFixed(1)} k€
            </span>
            at the approx. cost of {costPerHour} € an hour, incl. coaching
          </div>
        </div>

        <h1 className="font-bold text-lg text-white">Learned so far</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li key={skill.name}>✅ {skill.name}</li>
          ))}
        </ul>

        <h1 className="font-bold text-lg text-white">Coming up</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skillsUpcoming.map((skill) => (
            <li key={skill.name}>🟡 {skill.name}</li>
          ))}
          <li className="text-slate-500 italic">This ain&apos;t the end :)</li>
        </ul>

        <div className="flex gap-4 border-y border-y-slate-700 py-4">
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
