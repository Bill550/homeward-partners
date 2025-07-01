// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Layout>
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  element={
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Home />
                    </motion.div>
                  }
                  path="/"
                />
                <Route
                  element={
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <About />
                    </motion.div>
                  }
                  path="/about"
                />
                <Route
                  element={
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Contact />
                    </motion.div>
                  }
                  path="/contact"
                />
              </Routes>
            </AnimatePresence>
          </Layout>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;