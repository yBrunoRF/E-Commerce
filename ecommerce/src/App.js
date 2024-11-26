import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ListaPedidos from './components/Cliente/ListaPedidos';
import CadastroProduto from './components/Produto/CadastroProduto';
import ListaProdutos from './components/Produto/ListaProdutos';
import CadastroPedido from './components/Pedido/CadastroPedido';
import Home from './components/Home';
import Dados from './components/Info'; 

const App = () => {

  useEffect(() => {
    const rootElement = document.querySelector('body > div > div > router');

    if (rootElement) {
      console.log(rootElement); 

      
    
    }
  }, []);

  return (
    <Router>
      <div>
        <header>
          <h1>Sistema de E-commerce</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Registrar</Link></li>
              <li><Link to="/cadastro-produto">Cadastrar Produto</Link></li>
              <li><Link to="/lista-produtos">Lista de Produtos</Link></li>
              <li><Link to="/cadastro-pedido">Cadastrar Pedido</Link></li>
              <li><Link to="/lista-pedidos">Lista de Pedidos</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cadastro-produto" element={<CadastroProduto />} />
            <Route path="/lista-produtos" element={<ListaProdutos />} />
            <Route path="/cadastro-pedido" element={<CadastroPedido />} />
            <Route path="/lista-pedidos" element={<ListaPedidos />} />
            <Route path="/pedidos" element={<Dados endpoint="pedidos" />} /> 
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Meu E-commerce. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;