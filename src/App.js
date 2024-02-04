import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/Hero';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <HeroSection/>
      </div>
    </Router>
  );
}

export default App;
