import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositório";
import useTabelaOuForm from "./useTabelaOuForm";

export default () => {
  const repo: ClienteRepositorio = new ColecaoCliente();
  const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Array<Cliente>>([]);

  const obterTodos = () => {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  };
  useEffect(obterTodos, []);

  const selecionarCliente = (cliente: Cliente) => {
    setCliente(cliente);
    exibirFormulario();
  };

  const excluirCliente = async (cliente: Cliente) => {
    await repo.excluir(cliente);
    obterTodos();
  };

  const salvarCliente = async (cliente: Cliente) => {
    if (cliente.nome.length === 0 || cliente.idade <= 0) {
      return;
    }
    await repo.salvar(cliente);
    obterTodos();
  };

  const novoCliente = () => {
    setCliente(Cliente.vazio);
    exibirFormulario();
  };
  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  };
};
