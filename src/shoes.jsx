import React, { useState } from 'react';
import shoes1 from './images/shoes1.jpg';
import shoes2 from './images/shoes2.jpg';
import shoes3 from './images/shoes3.jpg';
import shoes4 from './images/shoes4.jpg';
import shoes5 from './images/shoes5.jpg';
import shoes6 from './images/shoes6.jpg';
import shoes7 from './images/shoes7.jpg';
import shoes8 from './images/shoes8.jpg';
import shoes9 from './images/shoes9.jpg';
import shoes10 from './images/shoes10.jpg';
import shoes11 from './images/shoes11.jpg';
import shoes12 from './images/shoes12.jpg';
import './Top.css';
export const Shoes = ({ addToCart }) => {
  const shoesStyle = {
    width: '200px',
    height: '200px',
    margin: '20px',
  };

  const [selectedshoes, setSelectedshoes] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    const item = { name: selectedshoes, price: 500 };
    addToCart(item);
    setShowModal(false);
  };

  const handleshoesClick = shoes => {
    setSelectedshoes(shoes);
    setShowModal(true);
  };

  return (
    <>
      <div id="containerf">
        <img id="shoesm" src={shoes1} alt="shoes 1" style={shoesStyle} onClick={() => handleshoesClick('shoes 1')} />
        <img id="shoesm" src={shoes2} alt="shoes 2" style={shoesStyle} onClick={() => handleshoesClick('shoes 2')} />
        <img id="shoesm" src={shoes3} alt="shoes 3" style={shoesStyle} onClick={() => handleshoesClick('shoes 3')} />
        <img id="shoesm" src={shoes4} alt="shoes 4" style={shoesStyle} onClick={() => handleshoesClick('shoes 4')} />
        <img id="shoesm" src={shoes5} alt="shoes 5" style={shoesStyle} onClick={() => handleshoesClick('shoes 5')} />
        <img id="shoesm" src={shoes6} alt="shoes 6" style={shoesStyle} onClick={() => handleshoesClick('shoes 6')} />
        <img id="shoesm" src={shoes7} alt="shoes 7" style={shoesStyle} onClick={() => handleshoesClick('shoes 7')} />
        <img id="shoesm" src={shoes8} alt="shoes 8" style={shoesStyle} onClick={() => handleshoesClick('shoes 8')} />
        <img id="shoesm" src={shoes9} alt="shoes 9" style={shoesStyle} onClick={() => handleshoesClick('shoes 9')} />
        <img id="shoesm" src={shoes10} alt="shoes 10" style={shoesStyle} onClick={() => handleshoesClick('shoes 10')} />
        <img id="shoesm" src={shoes11} alt="shoes 11" style={shoesStyle} onClick={() => handleshoesClick('shoes 11')} />
        <img id="shoesm" src={shoes12} alt="shoes 12" style={shoesStyle} onClick={() => handleshoesClick('shoes 12')} />
      </div>
      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
          <h3> Hey there </h3>
            <p>{selectedshoes}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};