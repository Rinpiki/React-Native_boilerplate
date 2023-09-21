import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ApiContext = createContext(null);

export function ApiProvider({ children }) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'tDqzkbci2QpO5ZjDACJ2UAWwbABBaRXGLJtrVdRS1EUxrdD6pssVUxM7',
      },
    };

    axios
      .get('https://api.pexels.com/v1/search?query=nature', config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <ApiContext.Provider value={Data}>{children}</ApiContext.Provider>;
}

export default ApiContext;
