import React, { useState } from 'react';
import topw1 from './images/topw1.jpg';
import topw2 from './images/topw2.jpg';
import topw3 from './images/topw3.jpg';
import topw4 from './images/topw4.jpg';
import topw5 from './images/topw5.jpg';
import topw6 from './images/topw6.jpg';
import topw7 from './images/topw7.jpg';
import topw8 from './images/topw8.jpg';
import topw9 from './images/topw9.jpg';
import topw10 from './images/topw10.jpg';
import topw11 from './images/topw11.jpg';
import topw12 from './images/topw12.jpg';
import './Top.css';
export const TopsW = ({ addToCart }) => {
  const topwStyle = {
    width: '200px',
    height: '200px',
    margin: '20px',
  };

  const [selectedtopw, setSelectedtopw] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    const item = { name: selectedtopw, price: 500 };
    addToCart(item);
    setShowModal(false);
  };

  const handletopwClick = topw => {
    setSelectedtopw(topw);
    setShowModal(true);
  };

  return (
    <>
      <div id="containerf">
        <img id="topwm" src={topw1} alt="topw 1" style={topwStyle} onClick={() => handletopwClick('top 1')} />
        <img id="topwm" src={topw2} alt="topw 2" style={topwStyle} onClick={() => handletopwClick('top 2')} />
        <img id="topwm" src={topw3} alt="topw 3" style={topwStyle} onClick={() => handletopwClick('top 3')} />
        <img id="topwm" src={topw4} alt="topw 4" style={topwStyle} onClick={() => handletopwClick('top 4')} />
        <img id="topwm" src={topw5} alt="topw 5" style={topwStyle} onClick={() => handletopwClick('top 5')} />
        <img id="topwm" src={topw6} alt="topw 6" style={topwStyle} onClick={() => handletopwClick('top 6')} />
        <img id="topwm" src={topw7} alt="topw 7" style={topwStyle} onClick={() => handletopwClick('top 7')} />
        <img id="topwm" src={topw8} alt="topw 8" style={topwStyle} onClick={() => handletopwClick('top 8')} />
        <img id="topwm" src={topw9} alt="topw 9" style={topwStyle} onClick={() => handletopwClick('top 9')} />
        <img id="topwm" src={topw10} alt="topw 10" style={topwStyle} onClick={() => handletopwClick('top 10')} />
        <img id="topwm" src={topw11} alt="topw 11" style={topwStyle} onClick={() => handletopwClick('top 11')} />
        <img id="topwm" src={topw12} alt="topw 12" style={topwStyle} onClick={() => handletopwClick('top 12')} />
      </div>
      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
          <h3> Hey there </h3>
            <p>{selectedtopw}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};