import Head from 'next/head'
import Link from 'next/link'

import { Topbar } from '../components/Topbar'
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Petja Touru - Senior Software Developer</title>
      </Head>
      <div className="space-y-4">
        <Topbar
          heading="Petja Touru"
          subtitle="Senior Software Developer"
          avatar
        />
        <Container className="animate-fadeInUp">
          <main className="pb-10 lg:pb-20 space-y-20">
            <section className="space-y-4">
              <Title>Shortly About Me</Title>
              <p>
                I&apos;m a full-stack software developer from Helsinki, Finland,
                with 4+ years of professional software development experience
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
                <li>✅ Nets Group</li>
                <li>✅ Helsinki Regional Transport (HSL)</li>
                <li>✅ ÄrräTreeni Oy</li>
                <li>✅ A-Insinöörit Oy</li>
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

            <section className="space-y-4">
              <Title>Contact Me</Title>
              <div className="bg-slate-200 dark:bg-slate-950 px-4 py-2 rounded-xl flex gap-4 items-center">
                <div className="text-xl">🔴</div>
                <div>
                  I&apos;m currently not available for new projects nor looking
                  for a job
                </div>
              </div>
              <p>
                In non-work related matters, you can contact me on social media
                <div className="flex gap-4">
                  <a href="https://twitter.com/petjato">Twitter</a>
                  <a href="https://instagram.com/petjato">Instagram</a>
                  <a href="https://t.me/petjato">Telegram</a>
                </div>
              </p>
            </section>
          </main>
        </Container>
      </div>
    </>
  )
}
