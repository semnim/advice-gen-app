import axios from 'axios';
import { useEffect, useState } from 'react';

const useAdviceAPI = () => {
  const baseUrl = 'https://api.adviceslip.com/advice';
  const [currentAdvice, setCurrentAdvice] = useState(null);

  const getAdvice = async () => {
    const response = await axios.get(`${baseUrl}?timestamp=${new Date().getTime()}`);
    setCurrentAdvice(response.data.slip);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { currentAdvice, getAdvice };
};

export default useAdviceAPI;
