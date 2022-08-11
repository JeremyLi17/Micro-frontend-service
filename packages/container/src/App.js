import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './conponents/MarketingApp';
import Header from './conponents/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
