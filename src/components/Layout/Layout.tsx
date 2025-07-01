// src/components/Layout/Layout.tsx
import React from 'react';
import Footer from '../Footer';
import Particles from '../UI/Particles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      <Particles />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;