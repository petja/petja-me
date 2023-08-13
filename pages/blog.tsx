import { Container } from '../components/Container'
import Head from 'next/head'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Petja Touru</title>
      </Head>
      <Container className="space-y-8 pb-20 animate-fadeInUp">
        <p>
          I&apos;m interested to start a blog but haven&apos;t yet had an idea
          what to write 😅
        </p>
        <p>
          Help me by telling me what to write about:
          <br />
          <a href="mailto:blog@petja.me">blog@petja.me</a>
        </p>
      </Container>
    </>
  )
}
