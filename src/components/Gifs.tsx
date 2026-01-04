'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';

export default function Gifs() {
  const gifs = [
    'https://i.imgur.com/gNs7hCY.gif',
    'https://i.imgur.com/Sj069Mm.mp4',
    'https://i.imgur.com/yxQuRVL.gif',
    'https://i.imgur.com/e5CYhIX.mp4',
    'https://i.imgur.com/prkUwUw.mp4',
    'https://i.imgur.com/CBLhvH1.mp4', 
    'https://i.imgur.com/Jdx672o.mp4',
    'https://i.imgur.com/CGyt8Yw.mp4',
    'https://i.imgur.com/jkjRcjb.mp4',
    'https://i.imgur.com/2LL59Ko.mp4',
    // Añade más URLs aquí (pueden ser .gif o .mp4)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Cargar GIF aleatorio al inicio
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    setCurrentIndex(randomIndex);
  }, []);

  const nextGif = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % gifs.length);
  };

  const prevGif = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length);
  };

  const randomGif = () => {
    setDirection(0);
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * gifs.length);
    } while (newIndex === currentIndex && gifs.length > 1);
    setCurrentIndex(newIndex);
  };

  const isVideo = (url: string) => url.endsWith('.mp4') || url.endsWith('.webm');

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 300 : direction < 0 ? -300 : 0,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -300 : direction < 0 ? 300 : 0,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="space-y-12 max-w-2xl mx-auto px-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl font-black mb-4 text-gray-800">
          🎬 Momentos de Mario
        </h2>
        <p className="text-gray-600">Los mejores GIFs de Mario, puede que generados o no por IA</p>
      </div>

      {/* Visualizador de GIF */}
      <div className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col items-center">
        {/* Contador */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200 text-gray-700 px-4 py-2 rounded-full font-bold text-sm shadow-md z-10">
          {currentIndex + 1} / {gifs.length}
        </div>

        {/* Contenedor del GIF con animación - VERTICAL */}
        <div className="relative w-64 md:w-80 h-96 md:h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {isVideo(gifs[currentIndex]) ? (
              // Si es video (MP4)
              <motion.video
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                src={gifs[currentIndex]}
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              // Si es imagen (GIF)
              <motion.img
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                src={gifs[currentIndex]}
                alt={`Mario GIF ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Controles - EN LÍNEA */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Botón anterior */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevGif}
            className="p-3 bg-gradient-to-r from-sky-200 to-cyan-200 text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="GIF anterior"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Botón aleatorio */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={randomGif}
            className="p-4 bg-gradient-to-r from-violet-200 to-purple-200 text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="GIF aleatorio"
          >
            <Shuffle size={28} />
          </motion.button>

          {/* Botón siguiente */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextGif}
            className="p-3 bg-gradient-to-r from-pink-200 to-rose-200 text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="GIF siguiente"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Indicadores (puntos) */}
        <div className="flex justify-center gap-2 mt-6">
          {gifs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'w-8 bg-gradient-to-r from-orange-300 to-pink-300'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al GIF ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Info adicional */}
      <div className="text-center bg-gradient-to-r from-amber-100 via-orange-100 to-pink-100 p-8 rounded-xl">
        <p className="text-gray-700 text-lg">
          💡 <strong>Tip:</strong> Usa el botón <Shuffle className="inline w-5 h-5" /> para ver GIFs de manera aleatoria.
        </p>
      </div>
    </div>
  );
}