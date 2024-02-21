
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const Header = () => {
  const { cart } = useContext(AppContext);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart {cart.length > 0 && <span>({cart.length})</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
