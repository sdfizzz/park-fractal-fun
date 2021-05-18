import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: 'PT Root UI', sans-serif;
    background: rgba(32, 32, 32, 1) url('/img/bg.svg') no-repeat;
    background-size: contain;
    color: rgba(255, 255, 255, 1);
  }
`;

export default GlobalStyle;
