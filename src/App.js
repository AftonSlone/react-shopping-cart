import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { PorductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    setCart(
      cart.filter((item) => {
        return item.id != id;
      })
    );
  };

  return (
    <div className="App">
      <PorductContext.Provider value={[products, addItem]}>
        <CartContext.Provider value={[cart, removeItem]}>
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart cart={cart} />
          </Route>
        </CartContext.Provider>
      </PorductContext.Provider>
    </div>
  );
}

export default App;
