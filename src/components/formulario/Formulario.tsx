import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "../Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}
export default (props: FormularioProps) => {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div className="bg-gray-100 p-5 rounded-md">
      {id ? (
        <Entrada somenteLeitura texto="Código" valor={id} className="mb-4" />
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />
      <div className="mt-6 flex justify-end">
        <Botao
          className="mr-2"
          cor="sky"
          onClick={() => {
            props.clienteMudou?.(new Cliente(nome, idade, id));
          }}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
};
