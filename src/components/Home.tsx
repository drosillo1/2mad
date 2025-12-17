'use client';

import { motion } from 'framer-motion';

interface HomeProps {
  setCurrent: (page: string) => void;
}

export default function Home({ setCurrent }: HomeProps) {
  const items = [
    { name: 'Mario', emoji: '🐾', color: 'from-amber-200 via-orange-200 to-orange-300', id: 'mario' },
    { name: 'Alba', emoji: '👩🏻', color: 'from-pink-200 via-rose-200 to-pink-300', id: 'alba' },
    { name: 'Dani', emoji: '🧑🏼‍💻', color: 'from-sky-200 via-blue-200 to-cyan-300', id: 'dani' },
    { name: 'Nosotros', emoji: '🫶', color: 'from-emerald-200 via-green-200 to-teal-300', id: 'nosotros' },
    { name: 'Quiz', emoji: '🎮', color: 'from-violet-200 via-purple-200 to-purple-300', id: 'quiz' },
    { name: 'GIFs', emoji: '🎬', color: 'from-amber-200 via-yellow-200 to-orange-300', id: 'gifs' },
  ];

  return (
    <div className="space-y-24 px-6 pb-20 ">
      {/* Hero */}
      <div className="relative flex flex-col items-center text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent"
        >
          2MAD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600  text-black-300 mt-3"
        >
          Mario • Alba • Dani
        </motion.p> 
      </div>

      {/* Tarjetas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setCurrent(item.id)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`
              relative overflow-hidden rounded-2xl p-8 text-gray-700 font-semibold shadow-md hover:shadow-xl
              bg-gradient-to-br ${item.color} group transition-all transform hover:scale-105
            `}
          >
            {/* Fondo decorativo sutil */}
            <div className="absolute inset-0 opacity-10 bg-white mix-blend-overlay" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</div>
              <h3 className="text-2xl mb-1 drop-shadow-sm">{item.name}</h3>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}