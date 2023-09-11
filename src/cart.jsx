import React, { useState,useEffect } from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Cart = ({ myCart, updateCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const btnstyle = {
    backgroundColor: '#F3D8C2',

  };

  const handleDelete = idx => {
    const newCart = myCart.filter((_, i) => i !== idx);
    updateCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Recalculate total price whenever the cart changes
  useEffect(() => {
    const total = myCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [myCart]);

  const handleCheckout = () => {
    alert(`Thank you for your purchase of ${myCart.length} item(s) totaling ${totalPrice} LE!`);
    updateCart([]);
    localStorage.setItem('cart', '[]');
  };

  return (
    <div id="cartbody">
      <div>
        <h2><FontAwesomeIcon icon={faShoppingCart} /></h2>
        {myCart.map((item, idx) => (
          <div id="txt" key={idx}>
            <p>Item: {item.name}</p>
            <p>Price: {item.price}</p>
            <button style={btnstyle} onClick={() => handleDelete(idx)}>Remove from cart</button>
          </div>
        ))}
      </div>
      <div>
        <p><b>Total price:</b> {totalPrice} LE</p>
        {myCart.length > 0 && (
          <button style={btnstyle} onClick={handleCheckout}>Checkout</button>
        )}
      </div>
    </div>
  );
};