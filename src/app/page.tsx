'use client';

import { useState } from 'react';
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
        case 'gifs':           // ← NUEVO
      return <Gifs />;
      default:
        return <Home setCurrent={setCurrent} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navbar current={current} setCurrent={setCurrent} />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}