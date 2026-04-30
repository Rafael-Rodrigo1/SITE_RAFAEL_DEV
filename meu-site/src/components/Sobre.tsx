export default function Sobre() {
  return (
    <section id="sobre" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          Sobre mim
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento front-end utilizando React, TypeScript e Tailwind.
          Tenho experiência na construção de interfaces modernas e responsivas, aplicando boas práticas de organização de código e componentização.
          Também possuo conhecimentos em backend com Java, APIs REST e integração com serviços AWS, o que me permite desenvolver soluções mais completas.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Atualmente, estou em busca da minha primeira oportunidade como
          desenvolvedor, com o objetivo de evoluir rapidamente e construir
          projetos reais que gerem valor.
        </p>

       <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-1 rounded">React</span>
            <span className="bg-gray-800 px-3 py-1 rounded">TypeScript</span>
            <span className="bg-gray-800 px-3 py-1 rounded">Tailwind</span>
            <span className="bg-gray-800 px-3 py-1 rounded">JavaScript</span>
       </div>
      </div>
    </section>
  );
}