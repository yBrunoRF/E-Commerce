import React, { useState } from "react";
import axios from "axios";

const CadastroPedido = () => {
  const [descricao, setDescricao] = useState("");
  const [produtoId, setProdutoId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/pedidos",
        { descricao, produtoId }
      );
      console.log("Pedido cadastrado:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar pedido:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Pedido</h2>
      <input
        type="text"
        placeholder="Descrição do Pedido"
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="text"
        placeholder="ID do Produto"
        onChange={(e) => setProdutoId(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroPedido;
