
import React from 'react';
import BackgroundSection from './BackgroundSection';

const About: React.FC = () => {
  return (
    <BackgroundSection 
      id="about" 
      className="py-20"
      isFixed={false} // Background scrolls with the section
    >
      <div className="text-center relative z-10">
        <h2 className="text-3xl font-bold font-montserrat mb-4 text-white">Our Mission</h2>
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
        <p className="max-w-4xl mx-auto text-white leading-relaxed">
          Our core mission is to empower heritage organisations with the clarity and confidence to thrive in a digital world. We believe in building trust through transparent processes and delivering a lasting, positive impact on the sector.
        </p>
      </div>
    </BackgroundSection>
  );
};

export default About;
