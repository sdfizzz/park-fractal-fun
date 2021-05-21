import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Golos Text';
    src: local('Golos Text'), local('Golos'),
    url('/fonts/Golos-Text_Regular.woff2') format('woff2'),
    url('/fonts/Golos-Text_Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Golos Text', sans-serif;
    background: rgba(32, 32, 32, 1) url('/img/bg.svg') no-repeat;
    background-size: cover;
    color: #ffffff;
  }
  
  button {
    font-family: 'Golos Text', sans-serif;
    color: #ffffff;
  }
`;

export default GlobalStyle;
