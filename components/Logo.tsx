import React from 'react'
import styled, { keyframes } from 'styled-components'

import Logo1Src from '../images/name1.svg'
import Logo2Src from '../images/name2.svg'

const Logo = styled.img`
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

const Logo1 = styled(Logo)`
  transform: translateX(-3em);
  animation: 0.5s ${slide};
`

const Logo2 = styled(Logo)`
  transform: translateX(3em);
  animation: 0.5s ${slide2};
`

const Container = styled.div`
  animation: 0.5s ${glitch};
  animation-delay: 1s;
  animation-fill-mode: forwards;
`

const Subheader = styled.p`
  opacity: 0;
  margin-top: 3em;
  animation: 0.5s ${subheaderAnimation};
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
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
0%{
  transform:rotate(-360deg);
}`

const Spinner = styled.span`
  animation: 0.5s ${spinnerKeyframes} infinite linear;
`

export default class Logo extends React.PureComponent {
  state = {
    blobs: null
  }

  componentDidMount = async () =>
    this.setState({
      blobs: {
        logo1: await this.imageToBlobUrl(Logo1Src),
        logo2: await this.imageToBlobUrl(Logo2Src)
      }
    })

  /*     <Subheader>
    Software developer based in Espoo, Finland
    <br />
    <Link href="https://twitter.com/petjato">Twitter</Link>
    <Link href="https://github.com/petja">Github</Link>
    <Link href="https://www.linkedin.com/in/tourupetja/">LinkedIn</Link>
    <Link href="https://t.me/petjato">Telegram</Link>
    <Link href="mailto:hello@petja.me">Email</Link>
  </Subheader> */

  render = () =>
    this.state.blobs ? (
      <Container>
        <Logo1 src={this.state.blobs.logo1} />
        <Logo2 src={this.state.blobs.logo2} />
      </Container>
    ) : (
      <Spinner>⏳</Spinner>
    )

  private imageToBlobUrl = (src: string) =>
    fetch(src)
      .then(resp => resp.blob())
      .then(URL.createObjectURL)
}
