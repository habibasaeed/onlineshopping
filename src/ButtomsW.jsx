import React, { useState } from 'react';
import btmw1 from './images/btmw1.jpg';
import btmw2 from './images/btmw2.jpg';
import btmw3 from './images/btmw3.jpg';
import btmw4 from './images/btmw4.jpg';
import btmw5 from './images/btmw5.jpg';
import btmw6 from './images/btmw6.jpg';
import btmw7 from './images/btmw7.jpg';
import btmw8 from './images/btmw8.jpg';
import btmw9 from './images/btmw9.jpg';
import btmw10 from './images/btmw10.jpg';
import btmw11 from './images/btmw11.jpg';
import btmw12 from './images/btmw12.jpg';
import './Top.css';
export const BtmsW = ({ addToCart }) => {
  const btmwStyle = {
    width: '200px',
    height: '200px',
    margin: '20px',
  };

  const [selectedbtmw, setSelectedbtmw] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    const item = { name: selectedbtmw, price: 500 };
    addToCart(item);
    setShowModal(false);
  };

  const handlebtmwClick = btmw => {
    setSelectedbtmw(btmw);
    setShowModal(true);
  };

  return (
    <>
      <div id="containerf">
        <img id="btmwm" src={btmw1} alt="btmw 1" style={btmwStyle} onClick={() => handlebtmwClick('pants 1')} />
        <img id="btmwm" src={btmw2} alt="btmw 2" style={btmwStyle} onClick={() => handlebtmwClick('pants 2')} />
        <img id="btmwm" src={btmw3} alt="btmw 3" style={btmwStyle} onClick={() => handlebtmwClick('pants 3')} />
        <img id="btmwm" src={btmw4} alt="btmw 4" style={btmwStyle} onClick={() => handlebtmwClick('pants 4')} />
        <img id="btmwm" src={btmw5} alt="btmw 5" style={btmwStyle} onClick={() => handlebtmwClick('pants 5')} />
        <img id="btmwm" src={btmw6} alt="btmw 6" style={btmwStyle} onClick={() => handlebtmwClick('pants 6')} />
        <img id="btmwm" src={btmw7} alt="btmw 7" style={btmwStyle} onClick={() => handlebtmwClick('pants 7')} />
        <img id="btmwm" src={btmw8} alt="btmw 8" style={btmwStyle} onClick={() => handlebtmwClick('pants 8')} />
        <img id="btmwm" src={btmw9} alt="btmw 9" style={btmwStyle} onClick={() => handlebtmwClick('pants 9')} />
        <img id="btmwm" src={btmw10} alt="btmw 10" style={btmwStyle} onClick={() => handlebtmwClick('pats 10')} />
        <img id="btmwm" src={btmw11} alt="btmw 11" style={btmwStyle} onClick={() => handlebtmwClick('pants 11')} />
        <img id="btmwm" src={btmw12} alt="btmw 12" style={btmwStyle} onClick={() => handlebtmwClick('pants 12')} />
      </div>
      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            <h3> Hey there </h3>
            <p>{selectedbtmw}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};