'use client';

export default function Mario() {
  const timelineEvents = [
    { year: 2017, title: 'Llegada de Mario', description: 'El día que Mario entró en nuestras vidas. Quién iba a decir que apenas tenía tres meses.', icon: '🎉', imageUrl: '/images/primerafoto.jpg' },
    { year: 2017, title: 'Su pose favorita', description: 'Desde que llegó ya dormía como si el mundo fuera suyo. Siempre supimos que con nosotros se sentía en casa.', icon: '💤', imageUrl: '/images/posefavorita.jpg' },
    { year: 2017, title: 'Primer día de playa', description: 'Disfrutando en la playa, aunque el mar no le guste demasiado.', icon: '🏖️', imageUrl: '/images/playa.jpg' },
    { year: 2017, title: 'Primera Navidad', description: 'La primera de muchas Navidades juntos.', icon: '🎄', imageUrl: '/images/primeranavidad1.jpg' },
    { year: 2018, title: 'Domingos de parque', description: 'Uno de nuestros muchos domingos en el parque de perritos.', icon: '🛝', imageUrl: '/images/parque.jpg' },
    { year: 2018, title: 'Videollamada', description: 'Asustando a la tita por videollamada.', icon: '📱', imageUrl: '/images/tita.jpg' },
    { year: 2019, title: 'Cumpleaños', description: 'Disfrutando de los regalos de su segundo cumpleaños.', icon: '🎂', imageUrl: '/images/cumpleaños.jpg' },
    { year: 2020, title: 'Pandemia juntos', description: 'Probando los efectos de la vacuna.', icon: '💉', imageUrl: '/images/pandemia.jpg' },
    { year: 2020, title: 'Tercera Navidad', description: 'Siempre posando junto al árbol cada Navidad.', icon: '🎄', imageUrl: '/images/navidad2.jpg' },
    { year: 2022, title: 'Alerta', description: 'Durmiendo, pero siempre alerta.', icon: '🚨', imageUrl: '/images/alerta.jpg' },
    { year: 2022, title: 'Primer viaje juntos', description: 'Nuestro primer viaje en coche, los tres solos.', icon: '🚗', imageUrl: '/images/coche.jpg' },
    { year: 2023, title: 'Pose 2', description: 'Pasan los años, pero no cambia su forma de dormir.', icon: '🛏️', imageUrl: '/images/dormir.jpg' },
    { year: 2023, title: 'Prima favorita', description: 'Aunque siempre ha querido jugar con sus tres primas, tiene una favorita.', icon: '🐕', imageUrl: '/images/prima.jpg' },
    { year: 2025, title: 'Casi 9 años', description: 'Pasan los años, pero sigue igual de guapo y enérgico que siempre.', icon: '🐶', imageUrl: '/images/guapo.jpg' },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-black mb-4">🐾 Mario</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estaba destinado a ser el protagonista desde el instante que en la protectora lo llamaron Mario, junto a sus hermanitos Luigi, Peach, Yoshi...</p>
      </div>

      <div className="space-y-8">
        {timelineEvents.map((event, idx) => (
          <div key={idx} className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
                {event.icon}
              </div>
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              <div className="text-sm font-bold text-purple-600 mb-1">{event.year}</div>
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              {event.imageUrl && (
                <div className="mt-4">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-auto aspect-[3/4] object-cover rounded-md shadow-sm"
                  />
                  <br />
                  <p className="text-gray-600">{event.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}