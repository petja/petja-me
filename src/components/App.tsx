import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Logo from './Logo'

const Root = styled.div`
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
`

const GlobalStyle = createGlobalStyle`
  body {
    background: hsl(239, 65%, 16%);
    color: #fff;
    text-align: center;
    font-family: Menlo, monospace;
    line-height:1.75em;
  }

  #root, html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`

const App = () => (
  <Root>
    <GlobalStyle />
    <Logo />
  </Root>
)

export default App
