import React from 'react';
import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FractalCanvas from '../components/fractal/FractalCanvas';
import { StoreProvider } from '../store/StoreContext';

const ContentContainer = styled.section``;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 200px auto auto auto;
  grid-template-rows: 200px auto 200px;
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
          <FractalCanvas width={500} height={500} />
        </ContentContainer>
        <Footer area="footer" />
      </Layout>
    </StoreProvider>
  );
}

export default App;
