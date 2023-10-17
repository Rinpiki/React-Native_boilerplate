import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ApiContext = createContext(null);

export function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('car');

  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'tDqzkbci2QpO5ZjDACJ2UAWwbABBaRXGLJtrVdRS1EUxrdD6pssVUxM7',
      },
    };

    axios
      .get(`https://api.pexels.com/v1/search?query=${query}&page=2&locale=pt-BR`, config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query]);

  return <ApiContext.Provider value={{ data, query, setQuery }}>{children}</ApiContext.Provider>;
}

export default ApiContext;
