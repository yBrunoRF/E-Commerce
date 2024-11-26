import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dados = ({ endpoint }) => {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${endpoint}`);
        setDados(response.data);
      } catch (error) {
        setErro(error);
      }
    };

    fetchData();
  }, [endpoint]); // Endpoint é passado como prop

  if (erro) {
    return <div>Erro ao buscar dados: {erro.message}</div>;
  }

  return (
    <ul>
      {dados.map((item, index) => (
        <li key={index}>
          {Object.keys(item).map((key) => (
            <div key={key}>
              <strong>{key}:</strong> {item[key]}
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Dados;