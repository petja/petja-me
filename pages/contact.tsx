import Head from 'next/head'
import Link from 'next/link'

import { Topbar } from '../components/Topbar'
import { Container } from '../components/Container'

interface Tech {
  id: string
  name: string
}

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Petja Touru</title>
      </Head>
      <div className="space-y-4">
        <Topbar heading="Contact" />
        <Container className="animate-fadeInUp">
          <main className="pb-10 lg:pb-20 space-y-4">
            <div className="bg-slate-200 dark:bg-slate-950 px-4 py-2 rounded-xl flex gap-4 items-center">
              <div className="text-xl">🔴</div>
              <div>
                I&apos;m currently not available for new projects nor looking
                for a job
              </div>
            </div>
            <div>
              In non-work related matters, you can contact me on social media
              <div className="flex gap-4">
                <a href="https://twitter.com/petjato">Twitter</a>
                <a href="https://instagram.com/petjato">Instagram</a>
                <a href="https://t.me/petjato">Telegram</a>
              </div>
            </div>
          </main>
        </Container>
      </div>
    </>
  )
}
