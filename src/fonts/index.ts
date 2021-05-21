import { createGlobalStyle } from 'styled-components';
import GolosRegularWoff from './Golos/Golos-Text_Regular.woff';
import GolosRegularWoff2 from './Golos/Golos-Text_Regular.woff2';
import GolosDemiBoldWoff from './Golos/Golos-Text_DemiBold.woff';
import GolosDemiBoldWoff2 from './Golos/Golos-Text_DemiBold.woff2';
import GolosBoldWoff from './Golos/Golos-Text_Bold.woff';
import GolosBoldWoff2 from './Golos/Golos-Text_Bold.woff2';

import MerriweatherRegular from './Merriweather/Merriweather-Regular.ttf';
import MerriweatherItalic from './Merriweather/Merriweather-Italic.ttf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Golos Regular';
    src: local('Golos Text'), local('Golos Text Regular'),
    url(${GolosRegularWoff2}) format('woff2'),
    url(${GolosRegularWoff}) format('woff');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Golos DemiBold';
    src: local('Golos Text DemiBold'), url(${GolosDemiBoldWoff2}) format('woff2'),
    url(${GolosDemiBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Golos Bold';
    src: url(${GolosBoldWoff2}) format('woff2'),
    url(${GolosBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Merriweather';
    src: local('Merriweather Regular'),
    url(${MerriweatherRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Merriweather Italic';
    src: local('Merriweather Italic'),
    url(${MerriweatherItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
`;

export default GlobalFonts;
