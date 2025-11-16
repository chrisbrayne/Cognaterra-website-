
import React from 'react';

interface ServiceCardProps {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, body, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg group hover:shadow-xl hover:border-brand-accent border border-transparent transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-brand-accent mb-4 w-12 h-12 group-hover:text-[#0D6EFD] group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold font-montserrat mb-2">{title}</h3>
    <p className="text-gray-600">{body}</p>
  </div>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      title: "Digital Transformation",
      body: "From strategy to implementation, we guide your organisation through a holistic digital evolution.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "AI Strategy & Compliance",
      body: "We help you leverage AI ethically and effectively, establishing robust governance and compliance frameworks.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-6h3m-3 6h3M9 6H6m3 12H6m3-6h.01M12 12h.01M15 12h.01M12 9h.01M15 9h.01" /></svg>
    },
    {
      title: "Programme Intelligence",
      body: "Using data-driven insights to enhance decision-making and maximise the impact of your projects.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    },
    {
      title: "Nature & Environmental Digital",
      body: "Applying digital solutions to the unique challenges of conserving and managing natural heritage.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.761 14h8.478M5.282 8.036l.243.243a2 2 0 010 2.828l-1.03 1.03a2 2 0 01-2.828 0l-.243-.243a2 2 0 010-2.828l1.03-1.03a2 2 0 012.828 0zM18.718 8.036l.243.243a2 2 0 000 2.828l-1.03 1.03a2 2 0 00-2.828 0l-.243-.243a2 2 0 000-2.828l1.03-1.03a2 2 0 002.828 0z" /></svg>
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat text-gray-800">Our Services</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} body={service.body} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
