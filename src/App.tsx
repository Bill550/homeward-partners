// src/App.tsx - Optimized with lazy loading
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';
import './App.css';

// Lazy load all pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks/HowItWorks'));
const WhyChooseUs = React.lazy(() => import('./pages/WhyChooseUs/WhyChooseUs'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/why-choose-us" element={<WhyChooseUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Layout>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;