import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { StoreProvider } from '../store/StoreContext';
import Info from './Info';
import GlobalStyle from '../components/GlobalStyle';
import PixiApp from '../components/PixiApp';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <StoreProvider canvasSize={{ w: 800, h: 800 }}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <PixiApp />
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
