import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App';
import '../App.css';

const ProductPage = () => {
  const { products } = useContext(AppContext);
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>INR {product.price}</p>
    </div>
  );
};

export default ProductPage;
