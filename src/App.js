import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/rotas/home/Home';
import PageJadson from './components/rotas/RotaJadson/PageJadson';
import PageKami from './components/rotas/rotaKami/PageKami';
import PageLucas from './components/rotas/rotaLucas/PageLucas';

const App = () => {
  const handlePersonClick = (pageUrl) => {
    window.open(pageUrl, '_blank');
  };

  return (
    <div className="App">
      {/* Rotas React */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jadson" element={<PageJadson />} />
          <Route path="/kami" element={<PageKami />} />
          <Route path="/lucas" element={<PageLucas />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
