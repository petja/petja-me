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

function formatMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const modulo = Math.floor(minutes % 60)

  return `${hours} h ${modulo} min`
}

export default function Tunnel() {
  const { data, error } = useSWR<{
    latestVideo: {
      title: string
      date: string
      posterUrl: string
      downloadUrl: string
    }
    reservationStats: {
      totalTime: number
    }
  }>('https://fooni-scraper.petja.workers.dev/', (url: string) =>
    fetch(url).then((resp) => resp.json())
  )

  const { latestVideo } = data ?? {}

  return (
    <>
      <Head>
        <title>Tunnel Flying - Petja Touru</title>
      </Head>
      <Topbar
        heading="Tunnel Flying"
        subtitle="Last updated on July 16, 2022"
      />
      <Container className="space-y-8 pb-20 animate-fadeInUp">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg title">📽 Latest Session</h1>
            {latestVideo ? (
              <>
                <span className="leading-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
          <div className="gap-4 flex flex-col">
            <h1 className="font-bold text-lg title">⏱ Total Flight Time</h1>
            <div>
              <span className="text-4xl font-bold block title">
                {data
                  ? Math.round((data.reservationStats.totalTime + 240) / 60)
                  : '–'}{' '}
                hours
              </span>{' '}
              Approximate
            </div>
          </div>

          <div className="gap-4 flex flex-col">
            <h1 className="font-bold text-lg title">🏆 Top 3 Coaches</h1>
            <svg width="300" height="200" viewBox="0 0 300 200">
              <g className="fill-blue-200 dark:fill-slate-600">
                <rect x="0" y="0" width="50" height="50" />
                <rect x="0" y="75" width="50" height="50" />
                <rect x="0" y="150" width="50" height="50" />
              </g>
              <g className="fill-blue-200 dark:fill-slate-600">
                <rect x="50" y="0" width="250" height="50" />
                <rect x="50" y="75" width="98" height="50" />
              </g>
              <g>
                <text
                  x="10"
                  y="25"
                  alignmentBaseline="middle"
                  textAnchor="start"
                >
                  🥇
                </text>
                <text
                  x="10"
                  y="100"
                  alignmentBaseline="middle"
                  textAnchor="start"
                >
                  🥈
                </text>
                <text
                  x="10"
                  y="175"
                  alignmentBaseline="middle"
                  textAnchor="start"
                >
                  🥉
                </text>
              </g>
              <g className="fill-current dark:fill-white">
                <text
                  x="290"
                  y="10"
                  alignmentBaseline="hanging"
                  textAnchor="end"
                >
                  @aarohilli
                </text>
                <text
                  x="290"
                  y="85"
                  alignmentBaseline="hanging"
                  textAnchor="end"
                >
                  @lassilainen
                </text>
                <text
                  x="290"
                  y="160"
                  alignmentBaseline="hanging"
                  textAnchor="end"
                >
                  @jerebyman
                </text>
              </g>
              <g className="fill-slate-600 dark:fill-slate-300 text-sm">
                <text
                  x="290"
                  y="40"
                  alignmentBaseline="baseline"
                  textAnchor="end"
                >
                  {formatMinutes(167)}
                </text>
                <text
                  x="290"
                  y="115"
                  alignmentBaseline="baseline"
                  textAnchor="end"
                >
                  {formatMinutes(124)}
                </text>
                <text
                  x="290"
                  y="190"
                  alignmentBaseline="baseline"
                  textAnchor="end"
                >
                  {formatMinutes(95)}
                </text>
              </g>
            </svg>
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
