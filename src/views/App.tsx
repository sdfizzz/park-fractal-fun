import React from 'react';
import styled from 'styled-components';

import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FractalCanvas from '../components/fractal/FractalCanvas';
import { StoreProvider } from '../store/StoreContext';
import ConfigPrinter from '../components/test/ConfigPrinter';

const ContentContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Layout = styled.main`
  display: grid;
  min-height: 100%;
  grid-template-rows: 100px 1fr 100px;
  grid-template-columns: 200px auto auto auto;
  grid-template-areas:
    'header header header header'
    'menu content content content'
    'footer footer footer footer';

  grid-gap: 10px;

  ${ContentContainer} {
    grid-area: content;
  }
`;

function App() {
  return (
    <StoreProvider>
      <Layout>
        <Header area="header" />
        <SideMenu area="menu" />
        <ContentContainer>
          <FractalCanvas width={800} height={500} />
          <ConfigPrinter />
        </ContentContainer>
        <Footer area="footer" />
      </Layout>
    </StoreProvider>
  );
}

export default App;
