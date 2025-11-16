
import React from 'react';
import BackgroundSection from './BackgroundSection';

const Hero: React.FC = () => {
  return (
    <BackgroundSection 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20"
      isFixed={true} // Apply fixed background attachment for the mesh in Hero
    >
      <div className="py-16 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white leading-tight mb-6">
          Clarity, Trust, Impact.
          <br />
          <span className="text-brand-accent">Digital Transformation for Heritage.</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10">
          We empower cultural and natural heritage organisations to adopt digital, data, and AI solutions responsibly.
        </p>
        <a 
          href="#services"
          className="bg-brand-accent text-white font-bold font-montserrat py-3 px-8 rounded-full hover:bg-brand-accent-hover transition-all duration-300 text-lg shadow-lg transform hover:scale-105 inline-block"
        >
          Learn More
        </a>
      </div>
    </BackgroundSection>
  );
};

export default Hero;
