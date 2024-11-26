import React, { useEffect, useState } from "react";
import axios from "axios";

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pedidos");
        setPedidos(response.data);
      } catch (error) {
        console.error("Erro ao carregar pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Descrição: {pedido.descricao}
            <br />
            ID do Produto: {pedido.produtoId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPedidos;