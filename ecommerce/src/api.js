import axios from 'axios';

const API_URL = 'http://localhost:3001/pedidos'; 

// Obtem todos os pedidos
export const fetchPedidos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar pedidos: ' + error.message);
  }
};

// Cria novo pedido
export const createPedido = async (pedido) => {
  try {
    const response = await axios.post(API_URL, pedido);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar pedido: ' + error.message);
  }
};