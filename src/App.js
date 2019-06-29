import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import Header from './components/header'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-container" >
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;