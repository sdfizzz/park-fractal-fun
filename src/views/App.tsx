import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { StoreProvider } from '../store/StoreContext';
import Info from './Info';
import GlobalStyle from '../components/GlobalStyle';
import PixiApp from '../components/PixiApp';
import GlobalFonts from '../fonts';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Router>
        <StoreProvider canvasSize={{ w: 800, h: 800 }}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <ErrorBoundary>
                <PixiApp />
              </ErrorBoundary>
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </Switch>
          <Footer />
        </StoreProvider>
      </Router>
    </>
  );
}

export default App;
