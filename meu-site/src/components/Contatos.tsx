export default function Contato() {
  return (
    <section id="contato" className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contato
        </h2>

        <p className="text-gray-300 mb-8">
          Estou em busca de oportunidades como desenvolvedor front-end.
          Se quiser conversar ou conhecer mais sobre meu trabalho, entre em contato.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="rafaelrodrigodev@gmail.com"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Enviar Email
          </a>

          <a
            href="https://github.com/Rafael-Rodrigo1"
            target="_blank"
            className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-rodrigo674/"
            target="_blank"
            className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}