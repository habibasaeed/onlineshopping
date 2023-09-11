import React, { useState } from 'react';
import { MenPage } from './men.js';

export const Parent = () => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };

  return <MenPage addToCart={addToCart} />;
};

 