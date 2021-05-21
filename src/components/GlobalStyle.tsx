import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Golos Regular', sans-serif;
    background: rgba(32, 32, 32, 1) url('/img/bg.svg') no-repeat;
    background-size: cover;
    color: #ffffff;
  }
  
  button {
    font-family: 'Golos Regular', sans-serif;
    color: #ffffff;
  }
`;

export default GlobalStyle;
