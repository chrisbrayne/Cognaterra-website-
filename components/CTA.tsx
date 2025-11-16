
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-white" style={{ background: 'linear-gradient(45deg, #20c997, #0D6EFD)'}}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-montserrat mb-4">Ready to start your journey?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Contact us for a consultation to explore how Cognaterra can help your organisation.
        </p>
        <a 
          href="mailto:contact@cognaterra.com"
          className="bg-white text-brand-accent font-bold font-montserrat py-3 px-8 rounded-full hover:bg-gray-200 hover:text-brand-accent-hover transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTA;
