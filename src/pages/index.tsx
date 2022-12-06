import Botao from "../components/Botao";
import Formulario from "../components/formulario/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/tabela/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 38, "1"),
    new Cliente("Maria", 28, "2"),
    new Cliente("Pedro", 33, "3"),
    new Cliente("José", 30, "4"),
  ];

  const clienteSelecionado = (cliente: Cliente) => {
    console.log(cliente.nome);
  };

  const clienteExcluido = (cliente: Cliente) => {
    console.log(`Cliente excluido: ${cliente.nome}`);
  };

  return (
    <div
      className={`flex justify-center items-center h-screen 
      bg-gradient-to-r from-sky-200 to-indigo-200`}
    >
      <Layout titulo="Cadastro simples">
        <div className=" flex justify-end">
          <Botao cor="green" className="mb-4">
            Novo Cliente
          </Botao>
        </div>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
        <Formulario cliente={clientes[2]} />
      </Layout>
    </div>
  );
}
