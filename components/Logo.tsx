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
  margin-top: 3em;
  animation: 0.5s ${subheaderAnimation};
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  width: 100%;
  max-width: 800px;
  padding: 1em;
`

const Link = styled.a`
  color: inherit;
  margin: 1em 0.5em 0 0.5em;
  display: inline-block;
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
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.2);
`

export default class Logo extends React.PureComponent {
  state = {
    blobs: null,
    gone: false
  }

  componentDidMount = async () => {
    this.setState({
      blobs: {
        logo1: await this.imageToBlobUrl(Logo1Src),
        logo2: await this.imageToBlobUrl(Logo2Src),
        avatar: await this.imageToBlobUrl(
          'https://gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=300'
        )
      }
    })

    document.body.animate &&
      document.body.animate(
        [
          { backgroundColor: 'hsl(239, 65%, 66%)', offset: 0.0 },
          { backgroundColor: 'hsl(239, 65%, 16%)', offset: 0.5 },
          { backgroundColor: 'hsl(239, 65%, 66%)', offset: 0.51 },
          { backgroundColor: 'hsl(239, 65%, 16%)', offset: 1.0 }
        ],
        250
      )

    setTimeout(() => {
      this.setState({
        gone: true
      })
    }, 1500)
  }

  render = () => {
    if (this.state.gone) {
      return (
        <Biography>
          <Avatar src={this.state.blobs.avatar} alt="Picture of me" />
          <p>
            👋 Hey! My name is <u>Petja Touru</u> and I am software developer based in Espoo,
            Finland. Payment systems and public transport are what I breathe.
          </p>
          <p>
            I have experience from TypeScript, React, Node, Docker, GraphQL, Git and AWS. Currently
            I'm working with these technologies at Poplatek Oy as Full Stack Software Developer.
            You'll find me doing expirements with these on my free time too.
          </p>
          <p>Feel free to contact me &mdash; whether just to say hi or to ask me for a pint 🍻</p>
          <Link href="https://twitter.com/petjato">Twitter</Link>
          <Link href="https://github.com/petja">Github</Link>
          <Link href="https://www.linkedin.com/in/tourupetja/">LinkedIn</Link>
          <Link href="https://t.me/petjato">Telegram</Link>
          <Link href="mailto:hello@petja.me">Email</Link>
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
