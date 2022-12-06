import Cliente from "../core/Cliente";
import { IconeDeletar, IconeEditar } from "./Icones";

interface AcoesClienteProps {
  cliente: Cliente;
  clienteSelecionado?: (cliente: Cliente) => void; //void is an operator, which is used when the function is not return anything.
  clienteExcluido?: (cliente: Cliente) => void;
}
export default (props: AcoesClienteProps) => {
  /* console.log(props.exibirAcoes);
   */
  return (
    <td className="flex justify-center">
      {props.clienteSelecionado ? (
        <button
          onClick={() => props.clienteSelecionado?.(props.cliente)} // _____?.() = opcional chain
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
          onClick={() => props.clienteExcluido?.(props.cliente)} // _____?.() = opcional chain
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
};
