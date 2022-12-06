import Cliente from "../core/Cliente";
import AcoesCliente from "./AcoesCliente";
import { TabelaProp } from "./Tabela";

interface ClientesProps extends TabelaProp {
  exibirAcoes: ((cliente: Cliente) => void) | undefined;
}

export default (props: ClientesProps): JSX.Element => {
  console.log(props.exibirAcoes);
  return (
    <>
      {/* :JSX.Element +  fragments to package an array of elements as a single element. 
      It's importante because componente can't return type 'Element[]' */}
      {props.clientes?.map((cliente, i) => {
        /* ?.map = sintaxe do optional chain é importante ser usada 
      aqui pois se cliente for nulo não derá problema. Map so pode 
      ser chamado se tiver valor dentro do meu array. */
        return (
          <tr
            key={cliente.id}
            className={`${i % 2 === 0 ? "bg-sky-100" : "bg-sky-50"}`}
          >
            <td className="text-left p-4">{cliente.id}</td>
            <td className="text-left p-4">{cliente.nome}</td>
            <td className="text-left p-4">{cliente.idade}</td>
            {props.exibirAcoes ? (
              <AcoesCliente {...props} cliente={cliente} />
            ) : (
              false
            )}
          </tr>
        );
      })}
    </>
  );
};
