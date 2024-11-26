import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Partners } from './components/Partners';

function App() {
  return (
    <div className="min-h-screen bg-[#0F0A1F]">
      <Navbar />
      <Hero />
      <Services />
      <Partners />
    </div>
  );
}

export default App;