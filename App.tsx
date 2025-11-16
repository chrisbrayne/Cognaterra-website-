
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] text-[#212529] font-source-sans">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
