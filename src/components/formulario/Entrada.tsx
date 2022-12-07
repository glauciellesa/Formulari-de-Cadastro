import React from "react";

interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  className?: string;
  valorMudou?: (valor: any) => void;
}

export default (props: EntradaProps) => {
  return (
    <form className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
        border border-sky-800 rounded-lg
        focus:outline-none
        px-4 py-0.5 ${props.somenteLeitura ? "" : "focus:bg-white"}
        `}
      />
    </form>
  );
};
