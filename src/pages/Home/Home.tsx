// src/pages/Home/Home.tsx - Updated without Header (now in Layout)
import React from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Process from '../../components/Process';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA/CTA';
import Contact from '../../components/Contact/Contact';
import ParticleBackground from '../../components/UI/Particles/ParticleBackground';
import FloatingCTA from '../../components/UI/floatingCTA/index';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <ParticleBackground />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <FloatingCTA />
    </div>
  );
};

export default Home;