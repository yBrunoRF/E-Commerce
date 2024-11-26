import React, { useState } from "react";
import axios from "axios";

const CadastroProduto = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/produtos",
        { nome, preco }
      );
      console.log("Produto cadastrado:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Produto</h2>
      <input
        type="text"
        placeholder="Nome do Produto"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preço"
        onChange={(e) => setPreco(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroProduto;