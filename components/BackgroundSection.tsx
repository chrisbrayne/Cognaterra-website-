
import React from 'react';
import { meshNetworkPattern } from '../utils/constants';

interface BackgroundSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  isFixed?: boolean; // To allow Hero to have fixed attachment, others not
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ id, children, className = '', isFixed = false }) => {
  const backgroundAttachment = isFixed ? 'fixed' : 'scroll';

  return (
    <section 
      id={id} 
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: '#0D1117', // Dark base color
        backgroundImage: `radial-gradient(at 0% 100%, rgba(32, 201, 151, 0.1) 0%, transparent 70%), 
                          radial-gradient(at 100% 0%, rgba(13, 110, 253, 0.08) 0%, transparent 70%), 
                          url('${meshNetworkPattern}')`,
        backgroundSize: 'cover, cover, 250px 250px', // Gradients cover, pattern tiles
        backgroundRepeat: 'no-repeat, no-repeat, repeat',
        backgroundPosition: 'left bottom, right top, 0 0', // Positioning for gradients and pattern
        backgroundAttachment: `scroll, scroll, ${backgroundAttachment}`, // Gradients scroll, pattern fixed if specified
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default BackgroundSection;
