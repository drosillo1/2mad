'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  current: string;
  setCurrent: (page: string) => void;
}

export default function Navbar({ current, setCurrent }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'mario', label: 'Mario', icon: '🐾' },
    { id: 'alba', label: 'Alba', icon: '👩🏻' },
    { id: 'dani', label: 'Dani', icon: '🧑🏼‍💻' },
    { id: 'nosotros', label: 'Nosotros', icon: '🫶' },
    { id: 'quiz', label: 'Quiz', icon: '🎮' },
    { id: 'gifs', label: 'GIFs', icon: '🎬' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 bg-gray-900/30 border-b border-white/20 shadow-sm"
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => setCurrent('home')}
          className="text-2xl font-extrabold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent hover:opacity-80 transition"
        >
          2MAD
        </button>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-2 items-center">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setCurrent(item.id);
                setMenuOpen(false);
              }}
              className={`relative px-4 py-2 rounded-full font-semibold transition-all text-sm
                ${
                  current === item.id
                    ? 'text-gray-700 bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200 shadow-md'
                    : 'text-gray-700 hover:text-orange-300'
                }`}
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* BOTÓN MÓVIL - DERECHA */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 text-gray-200 hover:text-orange-400"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/90 bg-gray-900/30 backdrop-blur-md border-t border-white/20 py-3 space-y-2 px-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrent(item.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                  current === item.id
                    ? 'bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200 text-gray-700 shadow'
                    : 'hover:bg-gray-100 hover:bg-gray-800 text-gray-700 text-gray-300'
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
