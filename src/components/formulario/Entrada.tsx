import React, { useRef } from "react";

interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  required?: boolean;
  className?: string;
  valorMudou?: (valor: any) => void;
  mensagemDeErro?: string;
}

export default (props: EntradaProps) => {
  const inputEl = useRef(null);
  return (
    <form className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        ref={inputEl}
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.required}
        className={`
        border border-sky-800 rounded-lg
        focus:outline-none
        px-4 py-0.5 ${props.somenteLeitura ? "" : "focus:bg-white"}
        `}
      />
      <span
        className={`text-red-600 text-xs py-1 ${
          inputEl.current?.checkValidity() ? "invisible" : "visible"
        }`}
      >
        {props.mensagemDeErro}
      </span>
    </form>
  );
};
