export default function Dani() {
  const daniEvents = [
    { 
      title: 'Dani y Mario',
      description: ' Juntos en el parque.',
      icon: '💻',
      imageUrl: '/images/dani1.jpg'
    },
    { 
      title: 'Creando 2MAD',
      description: 'Dandome apoyo mientras programaba la web.',
      icon: '💻',
      imageUrl: '/images/apoyo.jpg'
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl font-black mb-4">👨‍💻 Dani</h2>
        <p className="text-xl text-gray-600">El creador detrás del código</p>
      </div>

      {/* Texto principal */}
      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-12 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-blue-900">Mi historia con Mario y Alba</h3>

        <p className="text-lg text-blue-800 leading-relaxed mb-4">
          Soy Dani, y decidí crear 2MAD para juntar dos cosas que me hacen feliz:
          la programación y los momentos que compartimos Mario, Alba y yo.
        </p>

        <p className="text-lg text-blue-800 leading-relaxed">
          Crear esta página ha sido más fácil de lo que parece, 
          sobre todo porque siempre tengo al mejor compañero a mi lado mientras programo.
        </p>
      </div>

      {/* Evento */}
      <div className="space-y-8">
        {daniEvents.map((event, idx) => (
          <div key={idx} className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
                {event.icon}
              </div>
            </div>

            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">{event.title}</h3>

              {event.imageUrl && (
                <div className="mt-4">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-auto aspect-[3/4] object-cover rounded-md shadow-sm"
                  />
                  <p className="text-gray-600 mt-3">{event.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}