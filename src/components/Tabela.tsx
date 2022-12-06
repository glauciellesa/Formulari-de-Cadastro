import Cliente from "../core/Cliente";
import Cabecalho from "./Cabecalho";
import TabelaBoby from "./TabelaBoby";

export interface TabelaProp {
  //Interface is a structure that defines the contract in your application.
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void; //void is an operator, which is used when the function is not return anything.
  clienteExcluido?: (cliente: Cliente) => void;
}

export default (props: TabelaProp) => {
  const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;

  /*  const renderizarCabecalho = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  };
 */

  /* const renderizarDados = (cliente: Cliente) => {
    return props.clientes?.map((cliente, i) => {
      ?.map = sintaxe do optional chain é importante ser usada 
        aqui pois se cliente for nulo não der problema, pois map so pode 
        ser chamado se tiver valor dentro do meu array. 
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-sky-100" : "bg-sky-50"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  };
  */

  /* const renderizarAcoes = () => {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)} // _____?.() = opcional chain
            className={`first-letter:flex justify-center items-center
            text-green-700 rounded-full p-2 m-1 hover:bg-red-50`}
          >
            {IconeEditar}
          </button>
        ) : (
          false
        )}
        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)} // _____?.() = opcional chain
            className={`first-letter:flex justify-center items-center
               text-red-700 rounded-full p-2 m-1 hover:bg-green-50`}
          >
            {IconeDeletar}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }; */

  return (
    <div className="overflow-x-auto">
      <table className="w-full rounded-xl overflow-hidden">
        <thead
          className={`
        text-gray-100
      bg-gradient-to-r from-sky-600 to-sky-300
      `}
        >
          <Cabecalho exibirAcoes={exibirAcoes} />
        </thead>
        <tbody>
          <TabelaBoby {...props} exibirAcoes={exibirAcoes} />
        </tbody>
      </table>
    </div>
  );
};
