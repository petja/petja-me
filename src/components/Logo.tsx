import React from 'react'
import styled, { keyframes } from 'styled-components'

import Logo1Src from '../images/name1.svg'
import Logo2Src from '../images/name2.svg'

const Base = styled.img`
  height: 5em;
  max-width: 50vw;
  display: block;
  height: 5em;
  width: 20em;
`

const slide = keyframes`
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(-3em);
  }
`

const slide2 = keyframes`
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(3em);
  }
`

const subheaderAnimation = keyframes`
  0% {
    transform: translateY(3em);
    opacity: 0;
  }

  100% {
    transform: translateY(0em);
    opacity: 1;
  }
`

const glitch = keyframes`
0%{
  transform:scale(1);
}
50%{
  transform:scale(1.2);
}
100%{
  transform:scale(0);
}
`

const Logo1 = styled(Base)`
  transform: translateX(-3em);
  animation: 0.5s ${slide};
`

const Logo2 = styled(Base)`
  transform: translateX(3em);
  animation: 0.5s ${slide2};
`

const Container = styled.div`
  animation: 0.5s ${glitch};
  animation-delay: 1s;
  animation-fill-mode: forwards;
`

const Biography = styled.div`
  opacity: 0;
  animation: 0.5s ${subheaderAnimation};
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  width: 100%;
  max-width: 800px;
  padding: 1em;
  max-height: 100%;
  overflow: auto;
`

const Link = styled.a`
  color: inherit;
`

const spinnerKeyframes = keyframes`
0%{
  transform:rotate(0deg);
}
100%{
  transform:rotate(360deg);
}`

const Spinner = styled.span`
  animation: 0.5s ${spinnerKeyframes} infinite linear;
`

const Avatar = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 1em;
`

const SocialMediaLinks = styled.div`
  & ${Link} {
    margin: 1em 0.5em;
    &:first-child {
      margin-left: 0;
    }
  }
`

const Splitted = styled.div`
  display: flex;
`

export default class Logo extends React.PureComponent {
  state = {
    blobs: null,
    gone: false,
    now: null,
  }

  componentDidMount = async () => {
    this.setState({
      blobs: {
        logo1: await this.imageToBlobUrl(Logo1Src),
        logo2: await this.imageToBlobUrl(Logo2Src),
        avatar: await this.imageToBlobUrl(
          'https://gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=160'
        ),
      },
    })

    setTimeout(() => {
      this.runLightning()
    }, 250)

    setTimeout(() => {
      this.setState({
        gone: true,
      })
    }, 1500)

    setInterval(() => {
      this.setState({
        now: Date.now(),
      })
    }, 1000)
  }

  private runLightning = () => {
    document.body.animate &&
      document.body.animate(
        [
          { backgroundColor: 'hsl(239, 65%, 66%)', offset: 0.0 },
          { backgroundColor: 'hsl(239, 65%, 16%)', offset: 0.5 },
          { backgroundColor: 'hsl(239, 65%, 66%)', offset: 0.51 },
          { backgroundColor: 'hsl(239, 65%, 16%)', offset: 1.0 },
        ],
        250
      )

    // setTimeout(() => this.runLightning(), Math.random() * 30000)
  }

  render = () => {
    if (this.state.gone) {
      const formatter = new Intl.DateTimeFormat([], {
        timeZone: 'Europe/Helsinki',
        hour: 'numeric',
        minute: 'numeric',
      })

      const timeInFinland = formatter.format(new Date())

      const utcHours = new Date().getUTCHours()

      const age = new Date().getFullYear() - 1997

      return (
        <Biography>
          <Splitted>
            <Avatar src={this.state.blobs.avatar} alt="Picture of me" />
            <p>
              <strong>👋 Hey! My name is Petja!</strong>
              <br />I am {age} years old software developer based in{' '}
              <Link href="https://maps.google.com/?q=Espoo, Finland">Espoo, Finland</Link>.
            </p>
          </Splitted>
          <p>
            Currently I'm working with TypeScript, React, Node, Docker, PostgreSQL, GraphQL and AWS
            while my stay as a Full Stack Software Developer at{' '}
            <Link href="https://www.poplatek.fi/">Poplatek Oy</Link>. Since primary school I've
            worked with dozens of other technologies too. I also have previous experience from
            another software company and freelanced several projects too. On my free time I'm also
            gathering new skills and working on my personal projects &mdash; some of them being open
            source.
          </p>
          <p>Feel free to contact me &mdash; whether just to say hi or to ask me for a pint 🍻</p>
          <SocialMediaLinks>
            <Link href="https://twitter.com/petjato">Twitter</Link>
            <Link href="https://github.com/petja">Github</Link>
            <Link href="https://www.linkedin.com/in/tourupetja/">LinkedIn</Link>
            <Link href="https://t.me/petjato">Telegram</Link>
            <Link href="mailto:hello@petja.me">Email</Link>
          </SocialMediaLinks>
          {utcHours < 5 || utcHours >= 19 ? (
            <p>😴 It's {timeInFinland} here in Finland but I try my best to reply ASAP</p>
          ) : (
            <p>
              In need of my GPG public key? Yank one from{' '}
              <Link href="https://keys.openpgp.org/search?q=hello%40petja.me">here</Link>.
            </p>
          )}
        </Biography>
      )
    }

    if (this.state.blobs) {
      return (
        <Container>
          <Logo1 src={this.state.blobs.logo1} />
          <Logo2 src={this.state.blobs.logo2} />
        </Container>
      )
    }

    return <Spinner>⏳</Spinner>
  }

  private imageToBlobUrl = (src: string) =>
    fetch(src)
      .then(resp => resp.blob())
      .then(URL.createObjectURL)
}
