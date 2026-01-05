'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import Mario from '@/components/Mario';
import Alba from '@/components/Alba';
import Dani from '@/components/Dani';
import Nosotros from '@/components/Nosotros';
import Quiz from '@/components/Quiz';
import Gifs from '@/components/Gifs';

export default function App() {
  const [current, setCurrent] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [current]);

  const renderContent = () => {
    switch (current) {
      case 'home':
        return <Home setCurrent={setCurrent} />;
      case 'mario':
        return <Mario />;
      case 'alba':
        return <Alba />;
      case 'dani':
        return <Dani />;
      case 'nosotros':
        return <Nosotros />;
      case 'quiz':
        return <Quiz />;
      case 'gifs':
        return <Gifs />;
      default:
        return <Home setCurrent={setCurrent} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navbar current={current} setCurrent={setCurrent} />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}