import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Fields from './components/Fields';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Fields />
      <Services />
      <Pricing />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
