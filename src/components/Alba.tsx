export default function Alba() {
  const albaEvents = [
    { 
      title: 'Alba y Mario',
      description: 'Juntos desde el principio',
      icon: '❤️',
      imageUrl: '/images/albaymario.jpg'
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl font-black mb-4">👩🏻 Alba</h2>
        <p className="text-xl text-gray-600">La pieza clave</p>
      </div>

      {/* Descripción principal */}
      <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-12 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-pink-900">
          Lo que Mario significa para Alba
        </h3>

        <p className="text-lg text-pink-800 leading-relaxed mb-4">
          Aunque al principio tener un cachorro tan grande te llegó a superar,
          desde el primer momento le mostraste un cariño inmenso y un amor completamente incondicional.
        </p>

        <p className="text-lg text-pink-800 leading-relaxed">
          Os apoyáis mutuamente y formáis un equipo increíble. 
          Eres su persona favorita y él es tu compañero inseparable. 
          Juntos habéis creado recuerdos que os acompañarán para siempre.
        </p>
      </div>

      {/* Evento */}
      <div className="space-y-8">
        {albaEvents.map((event, idx) => (
          <div key={idx} className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-2xl">
                {event.icon}
              </div>
            </div>

            <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold mb-2 text-pink-900">{event.title}</h3>

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
