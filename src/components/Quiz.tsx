'use client';

import { useState } from 'react';

export default function Quiz() {
  const [quizState, setQuizState] = useState({ current: 0, score: 0, finished: false });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const quizzes = [
    {
      q: '¿En qué año llegó Mario a nuestras vidas?',
      options: ['2013', '2015', '2017', '2025'],
      correct: 2,
    },
    {
      q: '¿Dónde pasa Mario la mayor parte del día?',
      options: ['Su cama', 'Nuestra cama', 'Sofá', 'En la terraza a la bartola'],
      correct: 1,
    },
    {
      q: '¿Qué es imprescindible para cada visita al vete?',
      options: ['Su prima Once', 'Premios', 'Bozal', 'Juguete'],
      correct: 2,
    },
    {
      q: '¿Qué le encanta comer a Mario a escondidas?',
      options: ['Servilletas', 'Pienso', 'Premios', 'Pescado'],
      correct: 0,
    },
    {
      q: '¿Cuál es su prima favorita?',
      options: ['Dana', 'Once', 'Elsa', 'Elsota'],
      correct: 1,
    },
    {
      q: '¿Que suelen tener los juguetes favoritos de Mario?',
      options: ['Bandera de España', 'Cuerda', 'Acero', 'Hueso'],
      correct: 1,
    },
    {
      q: '¿En qué mes es el cumpleaños de Mario?',
      options: ['Enero', 'Febrero', 'Septiembre', 'Diciembre'],
      correct: 1,
    },
    {
      q: '¿Cuál es el nombre de la calle donde vive Mario?',
      options: ['Calle Meca', 'Calle Navarra', 'Camino Casas del Molinillo', 'Calle Arquitecto Juan José Belmonte'],
      correct: 3,
    },
    {
      q: '¿Que suele hacer Mario cuando tiramos la basura?',
      options: ['Ladrar', 'Nada', 'Saltar como un loco', 'Morder a Dani'],
      correct: 2,
    },
    {
      q: '¿Que le gusta hacer a Mario con su tito Jose?',
      options: ['Jugar', 'Fumar', 'A y B son correctas', 'No le gusta hacer nada con él'],
      correct: 2,
    },
  ];

  const handleQuizAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    const isCorrect = quizzes[quizState.current].correct === selectedAnswer;
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;
    
    if (quizState.current + 1 < quizzes.length) {
      setQuizState({ current: quizState.current + 1, score: newScore, finished: false });
    } else {
      setQuizState({ current: quizState.current, score: newScore, finished: true });
    }
    
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const resetQuiz = () => {
    setQuizState({ current: 0, score: 0, finished: false });
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const getQuizMessage = () => {
    const percentage = (quizState.score / quizzes.length) * 100;
    if (percentage === 100) {
      return {
        text: '¡PERFECTO! Eres un verdadero fan de Mario ',
        subtitle: 'Conoces TODOS sus secretos y eres uno más de la familia 🎉',
        emoji: '🏆',
        color: 'from-yellow-300 to-yellow-600'
      };
    }
    if (percentage >= 60) {
      return {
        text: '¡Muy bien! Conoces bastante a Mario',
        subtitle: 'Seguro que os lleváis muy bien 🐶',
        emoji: '⭐',
        color: 'from-green-300 to-emerald-600'
      };
    }
    return {
      text: 'Necesitas pasar más tiempo con Mario',
      subtitle: 'Cuidado si te acercas, puede que te muerda 😅',
      emoji: '🎈',
      color: 'from-blue-300 to-blue-600'
    };
  };

  const getButtonStyle = (idx: number) => {
    if (!showFeedback) {
      return 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-orange-100 hover:to-pink-100 border-2 border-transparent hover:border-orange-300';
    }
    
    const isCorrect = quizzes[quizState.current].correct === idx;
    const isSelected = selectedAnswer === idx;
    
    if (isSelected && isCorrect) {
      return 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400';
    }
    if (isSelected && !isCorrect) {
      return 'bg-gradient-to-r from-red-100 to-rose-100 border-2 border-red-400';
    }
    if (!isSelected && isCorrect) {
      return 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300';
    }
    
    return 'bg-gray-50 border-2 border-gray-200 opacity-50';
  };

  const getIcon = (idx: number) => {
    if (!showFeedback) return null;
    
    const isCorrect = quizzes[quizState.current].correct === idx;
    const isSelected = selectedAnswer === idx;
    
    if (isSelected && isCorrect) return '✅';
    if (isSelected && !isCorrect) return '❌';
    if (!isSelected && isCorrect) return '✓';
    
    return null;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-5xl font-black mb-4">🎮 Quiz Mario</h2>
        <p className="text-gray-600">¿Cuánto conoces a Mario?</p>
      </div>

      {!quizState.finished ? (
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8 max-w-2xl mx-auto">
          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-300 to-pink-300 h-full transition-all duration-300"
              style={{ width: `${((quizState.current + 1) / quizzes.length) * 100}%` }}
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Pregunta {quizState.current + 1} de {quizzes.length}</p>
            <h3 className="text-2xl font-bold text-gray-800">{quizzes[quizState.current].q}</h3>
          </div>

          <div className="space-y-3">
            {quizzes[quizState.current].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showFeedback && handleQuizAnswer(idx)}
                disabled={showFeedback}
                className={`w-full p-4 text-left rounded-lg font-semibold transition-all flex items-center justify-between ${getButtonStyle(idx)} ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <span>{option}</span>
                {getIcon(idx) && <span className="text-2xl">{getIcon(idx)}</span>}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className="text-center space-y-4">
              {selectedAnswer === quizzes[quizState.current].correct ? (
                <p className="text-green-600 font-bold text-lg">
                  ¡Correcto! 🎉
                </p>
              ) : (
                <p className="text-red-600 font-bold text-lg">
                  Incorrecto. La respuesta correcta era: {quizzes[quizState.current].options[quizzes[quizState.current].correct]}
                </p>
              )}
              
              <button
                onClick={handleNextQuestion}
                className="px-8 py-3 bg-gradient-to-r from-orange-300 to-pink-300 text-gray-700 font-bold rounded-lg hover:shadow-lg transition-shadow"
              >
                {quizState.current + 1 < quizzes.length ? 'Siguiente pregunta →' : 'Ver resultados 🎯'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-2xl shadow-lg max-w-2xl mx-auto text-center space-y-8">
          <div className={`text-8xl bg-gradient-to-br ${getQuizMessage().color} bg-clip-text text-transparent`}>
            {getQuizMessage().emoji}
          </div>
          
          <div>
            <p className={`text-4xl font-black bg-gradient-to-br ${getQuizMessage().color} bg-clip-text text-transparent`}>
              {getQuizMessage().text}
            </p>
            <p className="text-xl text-gray-600 mt-3">
              {getQuizMessage().subtitle}
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-8 rounded-xl">
            <p className="text-gray-600 mb-2">Tu puntuación</p>
            <p className="text-5xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              {quizState.score}/{quizzes.length}
            </p>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-300 to-pink-300 h-full transition-all duration-500"
                style={{ width: `${(quizState.score / quizzes.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {Math.round((quizState.score / quizzes.length) * 100)}% de precisión
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={resetQuiz}
              className="w-full px-8 py-4 bg-gradient-to-r from-orange-300 to-pink-300 text-gray-700 font-bold rounded-lg hover:shadow-lg transition-shadow text-lg"
            >
              🔄 Intentar de nuevo
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="w-full px-8 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}