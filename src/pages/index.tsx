import Botao from "../components/Botao";
import Formulario from "../components/formulario/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/tabela/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    tabelaVisivel,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    exibirTabela,
  } = useClientes();
  return (
    <div
      className={`flex justify-center items-center h-screen 
      bg-gradient-to-r from-sky-200 to-indigo-200`}
    >
      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
          <>
            <div className=" flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
