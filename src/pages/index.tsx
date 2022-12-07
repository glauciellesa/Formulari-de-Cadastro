import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/formulario/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/tabela/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositório";

export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Array<Cliente>>([]);
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const obterTodos = () => {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  };
  useEffect(obterTodos, []);

  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente);
    setVisivel("form");
  };

  const clienteExcluido = async (cliente: Cliente) => {
    await repo.excluir(cliente);
    obterTodos();
  };

  const salvarCliente = async (cliente: Cliente) => {
    await repo.salvar(cliente);
    obterTodos();
  };

  const novoCliente = () => {
    setCliente(Cliente.vazio);
    setVisivel("form");
  };

  return (
    <div
      className={`flex justify-center items-center h-screen 
      bg-gradient-to-r from-sky-200 to-indigo-200`}
    >
      <Layout titulo="Cadastro simples">
        {visivel === "tabela" ? (
          <>
            <div className=" flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
