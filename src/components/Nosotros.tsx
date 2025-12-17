'use client';

export default function Nosotros() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-5xl font-black mb-4">🐾👩🏻👨‍💻 2MAD</h2>
        <p className="text-xl text-gray-600">La historia de Mario, Alba y Dani</p>
      </div>

      {/* Hero section con foto */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-l-4 border-purple-500">
        <img 
          src="/images/primeranavidad.jpg" 
          alt="Mario, Alba y Dani juntos"
          className="w-full h-auto aspect-[4/3] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8 text-white w-full">
            <h3 className="text-3xl font-bold mb-2">Los tres juntos</h3>
            <p className="text-lg">Nuestra primera Navidad</p>
          </div>
        </div>
      </div>

      {/* Explicación del nombre */}
      <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 p-12 rounded-2xl shadow-lg">
        <h3 className="text-4xl font-black mb-8 text-center text-purple-900">¿Por qué 2MAD?</h3>
        
        <div className="grid md:grid-cols-1 gap-8 mb-8">
          {/* Significado 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-500">
            <h4 className="text-2xl font-bold text-purple-700 mb-4">🐾 Mario • Alba • Dani</h4>
            <p className="text-gray-800 leading-relaxed">
              Las iniciales de nuestros nombres y el 2 (too) para darle un toque único y especial.
            </p>
          </div>
        </div>
      </div>

      {/* Propósito de la web */}
      <div className="space-y-6">
        <div className="bg-white p-12 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">🎯 El objetivo de esta web</h3>
          
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Llevamos muchos años juntos y seguro que nos quedan muchos más. Los tres hacemos un equipazo y hemos aprendido a caminar siempre en la misma dirección.
              <br /><br />
              No todos los momentos han sido fáciles: también ha habido días complicados, pero siempre nos hemos tenido los unos a los otros para apoyarnos, cuidarnos y salir adelante juntos.
              <br /><br />
              Por eso he querido crear <strong>2MAD</strong>, como un lugar donde guardar todos nuestros recuerdos y momentos especiales y hacer que perduren para siempre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
