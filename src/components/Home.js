import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import '../App.css';

const Home = () => {
  const { products, addToCart } = useContext(AppContext);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>INR {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;