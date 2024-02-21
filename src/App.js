

import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

export const AppContext = createContext();

const initialState = {
  products:[
            {
              id: 1,
              title: "Mahindra Scorpio N",
              image:
                "https://imgd.aeplcdn.com/310x174/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
              price: 1400000,
            },
            {
              id: 2,
              title: "Hyundai Creta",
              image:
                "https://imgd.aeplcdn.com/310x174/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.png?isig=0&q=80",
              price: 1100000,
            },
            {
              id: 3,
              title: "Maruti Fronx",
              image:
                "https://imgd.aeplcdn.com/310x174/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
              price: 750000,
            },
            {
              id: 4,
              title: "Mahindra Thar",
              image:
                "https://imgd.aeplcdn.com/310x174/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80",
              price: 500000,
            },
            {
              id: 5,
              title: "Land Rover Range Rover Velar",
              image:
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
              price: 8700000,
            },
            {
              id: 6,
              title: "BMW X1",
              image:
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/x1-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
              price: 7000000,
            },
            {
              id: 7,
              title: "Audi A4",
              image:
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
              price: 500000,
            }
          ],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isProductInCart = state.cart.some((item) => item.id === action.payload.id);
      if (isProductInCart) {
        alert("Product is already in the cart!");
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <AppContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;



