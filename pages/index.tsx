import Head from 'next/head'
import Link from 'next/link'

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
    id: 'prisma',
    name: 'Prisma',
  },
]

const clients = [
  { id: 'nets', name: 'Nets Group' },
  { id: 'hsl', name: 'Helsinki Regional Transport (HSL)' },
  { id: 'arratreeni', name: 'ÄrräTreeni' },
  { id: 'ains', name: 'A-Insinöörit' },
  { id: 'lmj', name: 'Waltti Solutions' },
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
              <h1 className="text-8xl font-serif">Senior Software Developer</h1>

              <Title>Shortly About Me</Title>
              <p>
                I&apos;m a full-stack software developer from Helsinki, Finland,
                with 5+ years of professional software development experience
                and 15+ years as a hobby.
              </p>
              <p>
                In my free time, I jump out of airplanes, fly in{' '}
                <Link href="/tunnel">a wind tunnel</Link>, play video games, and
                work on my personal software projects.
              </p>
            </section>

            <section className="space-y-4">
              <Title>Clients</Title>
              <p>
                I have worked for several clients. Here&apos;s few to mention
                &hellip;
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-lg">
                {clients.map((client) => (
                  <li key={client.id}>✅ {client.name}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <Title>Tech Stack</Title>
              <p>
                I pick technologies case-by-case basis, but here is few
                technologies I like &hellip;
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 text-lg">
                {techs.map((tech) => (
                  <li key={tech.id}>✅ {tech.name}</li>
                ))}
              </ul>
            </section>
          </main>
        </Container>
      </div>
    </>
  )
}
