import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from '../components/Container'
import { Title } from '../components/Title'

interface Tech {
  id: string
  name: string
}

const techs: Tech[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
  },
  {
    id: 'react',
    name: 'React',
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
  },
  {
    id: 'next',
    name: 'Next',
  },
  {
    id: 'node',
    name: 'Node',
  },
  {
    id: 'drizzle',
    name: 'Drizzle ORM',
  },
]

const clients = [
  { id: 'nets', name: 'Nexi Digital Finland', logo: 'nexi.jpeg' },
  { id: 'hsl', name: 'Helsinki Regional Transport (HSL)', logo: 'hsl.svg' },
  { id: 'arratreeni', name: 'ÄrräTreeni', logo: 'arratreeni.webp' },
  { id: 'ains', name: 'A-Insinöörit', logo: 'ains.png' },
  { id: 'lmj', name: 'Waltti Solutions', logo: 'waltti.svg' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Petja Touru - Senior Software Developer</title>
      </Head>

      <div className="space-y-4">
        <Container className="animate-fadeInUp">
          <main className="py-20 space-y-20">
            <section className="space-y-4">
              <span>
                <h1 className="inline font-bold">Petja Touru</h1> is a …
              </span>
              <span className="text-8xl font-serif block">
                Senior Software Developer
              </span>
            </section>

            <section className="space-y-4">
              <Title>Shortly About Me</Title>
              <p>
                I&apos;m a full-stack software developer from Helsinki, Finland,
                with 5+ years of professional software development experience
                and 15+ years as a hobby.
              </p>
              <p>
                In my free time, I jump out of airplanes, fly in{' '}
                <Link href="https://en.wikipedia.org/wiki/Vertical_wind_tunnel#Recreational_vertical_wind_tunnels">
                  a wind tunnel
                </Link>
                , play video games, and work on my personal software projects.
              </p>
            </section>

            <section className="space-y-4">
              <Title>Clients</Title>
              <p>
                I have worked with several clients. Here&apos;s few honorable
                mentions &hellip;
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-lg">
                {clients.map((client) => (
                  <li key={client.id} className="flex">
                    <div className="w-12">
                      <Image
                        src={`/clients/${client.logo}`}
                        height="32"
                        width="32"
                        alt={`${client.name} logo`}
                        className="inline rounded-md"
                      />
                    </div>
                    <span className="flex-1">{client.name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <Title>Tech Stack</Title>
              <p>
                I pick technologies case-by-case basis, but here is several
                technologies I enjoy working with &hellip;
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 text-lg">
                {techs.map((tech) => (
                  <li key={tech.id}>{tech.name}</li>
                ))}
              </ul>
            </section>
          </main>
        </Container>
      </div>
    </>
  )
}
