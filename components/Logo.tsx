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

const Logo1 = styled(Logo)`
  transform: translateX(-3em);
  animation: 0.5s ${slide};
`

const Logo2 = styled(Logo)`
  transform: translateX(3em);
  animation: 0.5s ${slide2};
`

const Subheader = styled.p`
  opacity: 0;
  margin-top: 3em;
  animation: 0.5s ${subheaderAnimation};
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
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

  render = () =>
    this.state.blobs ? (
      <div>
        <Logo1 src={this.state.blobs.logo1} />
        <Logo2 src={this.state.blobs.logo2} />
        <Subheader>
          Software Developer
          <br />
          hello@petja.me
        </Subheader>
      </div>
    ) : (
      <p>⏳</p>
    )

  private imageToBlobUrl = (src: string) =>
    fetch(src)
      .then(resp => resp.blob())
      .then(URL.createObjectURL)
}
