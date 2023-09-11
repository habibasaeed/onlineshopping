import React, { useState } from 'react';
import shoesw1 from './images/shoesw1.jpg';
import shoesw2 from './images/shoesw2.jpg';
import shoesw3 from './images/shoesw3.jpg';
import shoesw4 from './images/shoesw4.jpg';
import shoesw5 from './images/shoesw5.jpg';
import shoesw6 from './images/shoesw6.jpg';
import shoesw7 from './images/shoesw7.jpg';
import shoesw8 from './images/shoesw8.jpg';
import shoesw9 from './images/shoesw9.jpg';
import shoesw10 from './images/shoesw10.jpg';
import shoesw11 from './images/shoesw11.jpg';
import shoesw12 from './images/shoesw12.jpg';
import './Top.css';
export const ShoesW = ({ addToCart }) => {
  const shoeswStyle = {
    width: '200px',
    height: '200px',
    margin: '20px',
  };

  const [selectedshoesw, setSelectedshoesw] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    const item = { name: selectedshoesw, price: 500 };
    addToCart(item);
    setShowModal(false);
  };

  const handleshoeswClick = shoesw => {
    setSelectedshoesw(shoesw);
    setShowModal(true);
  };

  return (
    <>
      <div id="containerf">
        <img id="shoeswm" src={shoesw1} alt="shoesw 1" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 1')} />
        <img id="shoeswm" src={shoesw2} alt="shoesw 2" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 2')} />
        <img id="shoeswm" src={shoesw3} alt="shoesw 3" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 3')} />
        <img id="shoeswm" src={shoesw4} alt="shoesw 4" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 4')} />
        <img id="shoeswm" src={shoesw5} alt="shoesw 5" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 5')} />
        <img id="shoeswm" src={shoesw6} alt="shoesw 6" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 6')} />
        <img id="shoeswm" src={shoesw7} alt="shoesw 7" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 7')} />
        <img id="shoeswm" src={shoesw8} alt="shoesw 8" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 8')} />
        <img id="shoeswm" src={shoesw9} alt="shoesw 9" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 9')} />
        <img id="shoeswm" src={shoesw10} alt="shoesw 10" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 10')} />
        <img id="shoeswm" src={shoesw11} alt="shoesw 11" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 11')} />
        <img id="shoeswm" src={shoesw12} alt="shoesw 12" style={shoeswStyle} onClick={() => handleshoeswClick('shoes 12')} />
      </div>
      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
          <h3> Hey there </h3>
            <p>{selectedshoesw}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};