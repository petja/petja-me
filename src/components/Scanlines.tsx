import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0%{
      background-position:0 0;
    }
    100%{
      background-position:0 8px;
    }
`

const Scanlines = styled.div`
  background: repeating-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 8px);
  background-size: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  animation: 0.2s ${animation} infinite linear;
  pointer-events: none;
`

export default Scanlines
