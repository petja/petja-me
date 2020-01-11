import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Logo from './Logo'

const Root = styled.div`
  align-items: center;
  justify-content: center;
  height: 100%;
`

const GlobalStyle = createGlobalStyle`
  body {
    background: #131324;
    color: #fff;
    text-align: justify;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height:1.75em;
  }

  #root, html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <Root>
    <GlobalStyle />
    <Logo />
  </Root>
)

export default App
