import React, { useState } from 'react';
import top1 from './images/top1.jpg';
import top2 from './images/top2.jpg';
import top3 from './images/top3.jpg';
import top4 from './images/top4.jpg';
import top5 from './images/top5.jpg';
import top6 from './images/top6.jpg';
import top7 from './images/top7.jpg';
import top8 from './images/top8.jpg';
import top9 from './images/top9.jpg';
import top10 from './images/top10.jpg';
import top11 from './images/top11.jpg';
import top12 from './images/top12.jpg';
import './Top.css';
export const Tops = ({ addToCart }) => {
  const topStyle = {
    width: '200px',
    height: '200px',
    margin: '20px',
  };

  const [selectedTop, setSelectedTop] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    const item = { name: selectedTop, price: 500 };
    addToCart(item);
    setShowModal(false);
  };

  const handleTopClick = top => {
    setSelectedTop(top);
    setShowModal(true);
  };

  return (
    <>
      <div id="containerf">
        <img id="topm" src={top1} alt="top 1" style={topStyle} onClick={() => handleTopClick('Top 1')} />
        <img id="topm" src={top2} alt="top 2" style={topStyle} onClick={() => handleTopClick('Top 2')} />
        <img id="topm" src={top3} alt="top 3" style={topStyle} onClick={() => handleTopClick('Top 3')} />
        <img id="topm" src={top4} alt="top 4" style={topStyle} onClick={() => handleTopClick('Top 4')} />
        <img id="topm" src={top5} alt="top 5" style={topStyle} onClick={() => handleTopClick('Top 5')} />
        <img id="topm" src={top6} alt="top 6" style={topStyle} onClick={() => handleTopClick('Top 6')} />
        <img id="topm" src={top7} alt="top 7" style={topStyle} onClick={() => handleTopClick('Top 7')} />
        <img id="topm" src={top8} alt="top 8" style={topStyle} onClick={() => handleTopClick('Top 8')} />
        <img id="topm" src={top9} alt="top 9" style={topStyle} onClick={() => handleTopClick('Top 9')} />
        <img id="topm" src={top10} alt="top 10" style={topStyle} onClick={() => handleTopClick('Top 10')} />
        <img id="topm" src={top11} alt="top 11" style={topStyle} onClick={() => handleTopClick('Top 11')} />
        <img id="topm" src={top12} alt="top 12" style={topStyle} onClick={() => handleTopClick('Top 12')} />
      </div>
      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
          <h3> Hey there </h3>
            <p>{selectedTop}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};