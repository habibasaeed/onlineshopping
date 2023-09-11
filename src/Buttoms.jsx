import React, { useState } from 'react';
import btm1 from './images/btm1.jpg';
import btm2 from './images/btm2.jpg';
import btm3 from './images/btm3.jpg';
import btm4 from './images/btm4.jpg';
import btm5 from './images/btm5.jpg';
import btm6 from './images/btm6.jpg';
import btm7 from './images/btm7.jpg';
import btm8 from './images/btm8.jpg';
import btm9 from './images/btm9.jpg';
import btm10 from './images/btm10.jpg';
import btm11 from './images/btm11.jpg';
import btm12 from './images/btm12.jpg';
import './Top.css';
export const Btms = ({ addToCart }) => {
  const btmStyle = {
    width: '200px',
    height: '200px',
    margin: '20px',
  };

  const [selectedbtm, setSelectedbtm] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    const item = { name: selectedbtm, price: 500 };
    addToCart(item);
    setShowModal(false);
  };

  const handlebtmClick = btm => {
    setSelectedbtm(btm);
    setShowModal(true);
  };

  return (
    <>
      <div id="containerf">
        <img id="btmm" src={btm1} alt="btm 1" style={btmStyle} onClick={() => handlebtmClick('pants 1')} />
        <img id="btmm" src={btm2} alt="btm 2" style={btmStyle} onClick={() => handlebtmClick('pants 2')} />
        <img id="btmm" src={btm3} alt="btm 3" style={btmStyle} onClick={() => handlebtmClick('pants 3')} />
        <img id="btmm" src={btm4} alt="btm 4" style={btmStyle} onClick={() => handlebtmClick('pants 4')} />
        <img id="btmm" src={btm5} alt="btm 5" style={btmStyle} onClick={() => handlebtmClick('pants 5')} />
        <img id="btmm" src={btm6} alt="btm 6" style={btmStyle} onClick={() => handlebtmClick('pants 6')} />
        <img id="btmm" src={btm7} alt="btm 7" style={btmStyle} onClick={() => handlebtmClick('pants 7')} />
        <img id="btmm" src={btm8} alt="btm 8" style={btmStyle} onClick={() => handlebtmClick('pants 8')} />
        <img id="btmm" src={btm9} alt="btm 9" style={btmStyle} onClick={() => handlebtmClick('pants 9')} />
        <img id="btmm" src={btm10} alt="btm 10" style={btmStyle} onClick={() => handlebtmClick('pats 10')} />
        <img id="btmm" src={btm11} alt="btm 11" style={btmStyle} onClick={() => handlebtmClick('pants 11')} />
        <img id="btmm" src={btm12} alt="btm 12" style={btmStyle} onClick={() => handlebtmClick('pants 12')} />
      </div>
      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            <h3> Hey there </h3>
            <p>{selectedbtm}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};