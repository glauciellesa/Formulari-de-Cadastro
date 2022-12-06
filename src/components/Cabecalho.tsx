import Cliente from "../core/Cliente";

interface CabecalhoProp {
  exibirAcoes: ((cliente: Cliente) => void) | undefined;
}

export default (props: CabecalhoProp) => {
  return (
    <tr>
      <th className="text-left p-4">Código</th>
      <th className="text-left p-4">Nome</th>
      <th className="text-left p-4">Idade</th>
      {props.exibirAcoes ? <th className="p-4">Ações</th> : false}
    </tr>
  );
};
