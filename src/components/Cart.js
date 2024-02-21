import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../App.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>INR {item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: INR {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
