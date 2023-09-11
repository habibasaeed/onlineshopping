import './App.css';
import {Header} from "./Header";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {Home }from './Home';
import {ContactUs} from "./contactus";
import {About} from "./about";

import {MenPage} from "./men";
import {Tops} from "./Tops";
import {Btms} from "./Buttoms";
import {Shoes} from "./shoes";
import {TopsW} from "./TopsW";

import {Cart} from "./cart";
import React, { useState, useEffect } from 'react';
import { WomenPage } from './women';
import { BtmsW } from './ButtomsW';
import { ShoesW } from './ShoesW';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = item => {
    setCart([...cart, item]);
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/about" element={<About />} />
          <Route path="/men" element={<MenPage addToCart={addToCart} />} />
          <Route path="/Women" element={<WomenPage/>} />
          <Route path="/Tops" element={<Tops addToCart={addToCart} />} />
          <Route path="/TopsW" element={<TopsW addToCart={addToCart} />} />
          <Route path="/Buttoms" element={<Btms addToCart={addToCart} />} />
          <Route path="/ButtomsW" element={<BtmsW addToCart={addToCart} />} />
          <Route path="/Shoes" element={<Shoes addToCart={addToCart} />} />
          <Route path="/ShoesW" element={<ShoesW addToCart={addToCart} />} />

          <Route path="/cart" element={<Cart myCart={cart} updateCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;