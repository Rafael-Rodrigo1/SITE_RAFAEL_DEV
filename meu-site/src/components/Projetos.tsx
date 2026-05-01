const projetos = [
  {
    nome: "Sistema de Autenticação de usuários ",
    desc: "Sistema de autenticação completo com login, cadastro e integração com banco de dados MySQL.",
    tech: "Autenticação com Node.js, Express e integração com MySQL, consumida por interface React.",
    link: "https://github.com/Rafael-Rodrigo1/Sistema_de_Autenticacao",
    github: "https://github.com/Rafael-Rodrigo1/Sistema_de_Autenticacao"
  },
  {
    nome: "Projeto Sistema de Gestão Educacional",
    desc: "Este projeto é um sistema simples de gestão acadêmica desenvolvido em Java, aplicando conceitos de Programação Orientada a Objetos (POO) e uma arquitetura organizada em camadas. ",
    tech: "Java",
    link: "https://github.com/Rafael-Rodrigo1/Sistema_de_Gestao_Educacional",
    github: "https://github.com/Rafael-Rodrigo1/Sistema_de_Gestao_Educacional"
  },
  {
    nome: "Design Patterns em Java",
    desc: "Implementação prática de Design Patterns em Java, aplicando boas práticas de arquitetura e organização de código.",
    tech: "Java, Gradle",
    link: "https://github.com/Rafael-Rodrigo1/Design_Patterns",
    github: "https://github.com/Rafael-Rodrigo1/Design_Patterns"
  },
  {
    nome: "Banco De Dados Ecommerce",
    desc: "O objetivo deste projeto foi desenvolver um banco de dados relacional completo para um sistema de e-commerce, simulando o funcionamento de uma loja virtual com cadastro de clientes, pedidos, produtos, vendedores, fornecedores, entregas, pagamentos e controle de estoque.",
    tech: "MySQL",
    link: "https://github.com/Rafael-Rodrigo1/BANCO_DE_DADOS_ECOMMERCE",
    github: "https://github.com/Rafael-Rodrigo1/BANCO_DE_DADOS_ECOMMERCE"
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="p-10 bg-gray-800 text-white">
      <h2 className="text-3xl mb-6">Projetos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projetos.map((p, i) => (
          <div key={i} className="p-5 bg-gray-700 rounded-xl shadow-lg hover:scale-105 transition">

            <h3 className="text-xl font-bold">{p.nome}</h3>

            <p className="text-gray-300 mt-2">{p.desc}</p>

            <p className="text-sm text-gray-400 mt-2">{p.tech}</p>

            <div className="mt-4 flex gap-3">
              <a href={p.link} className="text-blue-400">
                Ver projeto
              </a>
              <a href={p.github} className="text-gray-400">
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}