import React, { useEffect, useState } from "react";
import axios from "axios";

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/produtos");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            Nome: {produto.nome}
            <br />
            Preço: {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProdutos;