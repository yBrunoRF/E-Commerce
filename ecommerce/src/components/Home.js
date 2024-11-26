import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao E-commerce!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registrar</Link>
          </li>
          <li>
            <Link to="/cadastro-produto">Cadastrar Produto</Link>
          </li>
          <li>
            <Link to="/lista-produtos">Lista de Produtos</Link>
          </li>
          <li>
            <Link to="/cadastro-pedido">Cadastrar Pedido</Link>
          </li>
          <li>
            <Link to="/lista-pedidos">Lista de Pedidos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;