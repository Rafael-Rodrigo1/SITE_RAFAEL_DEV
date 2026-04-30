export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-6">
      
      <h1 className="text-5xl md:text-6xl font-bold">
        Rafael <span className="text-blue-500">Rodrigo</span>
      </h1>

      <p className="text-xl mt-4 text-gray-300 max-w-xl">
        Desenvolvedor Front-End focado em criar interfaces modernas,
        rápidas e responsivas.
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="#projetos"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium"
        >
          Ver Projetos
        </a>

        <a
          href="#contato"
          className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
        >
          Contato
        </a>
      </div>

    </section>
  );
}