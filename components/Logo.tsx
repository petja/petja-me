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

export default () => (
  <div>
    <Logo1 src={Logo1Src} />
    <Logo2 src={Logo2Src} />
    <Subheader>
      Software Developer
      <br />
      hello@petja.me
    </Subheader>
  </div>
)
