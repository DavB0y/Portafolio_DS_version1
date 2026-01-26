
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-dark-text text-sm">
            © 2025 Davide Contreras Huerta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
