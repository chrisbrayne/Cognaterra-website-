
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#212529] text-gray-400 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.488 2.5C1.096 6 0 4.881 0 3.5S1.096 1 2.492 1C3.87 1 4.98 2.119 4.98 3.5zm-.049 3.5h-2.48V24h2.48V7zM18 6.5s-4.225-2.227-6.289-2.09c-2.427.164-3.711 1.942-3.711 5.3v13.29h2.481V13.882c0-2.583.565-3.889 2.82-3.889 2.254 0 2.372 1.961 2.372 4.025V24H24V13.578c0-6.19-2.73-7.587-5.992-7.078z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.593 0-6.494 2.902-6.494 6.493 0 .509.058 1.006.168 1.487-5.394-.271-10.187-2.864-13.387-6.795-.559.954-.881 2.072-.881 3.292 0 2.254 1.14 4.248 2.873 5.424-.847-.024-1.649-.26-2.35-.647-.005.024-.005.047-.005.071 0 3.149 2.239 5.767 5.207 6.362-.54.148-1.107.217-1.688.217-.414 0-.814-.04-1.205-.114.823 2.572 3.204 4.45 6.035 4.5-.229.18-.477.336-.736.476-3.264 1.967-7.468-.456-8.913-2.607-1.125-1.616-1.785-3.418-1.785-5.394 0-.155.009-.309.027-.461 3.064 1.964 6.702 3.102 10.605 3.102 12.062 0 18.675-9.96 18.675-18.675 0-.288-.007-.576-.021-.864.81-.582 1.516-1.312 2.079-2.148z"/></svg>
          </a>
        </div>
        <p className="mb-2 text-sm">&copy; 2025 Cognaterra. All rights reserved.</p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="#" className="hover:text-brand-accent transition-colors duration-300">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-brand-accent transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
