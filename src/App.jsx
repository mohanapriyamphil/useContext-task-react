import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Viewcart } from "./Components/Viewcart";
import "./App.css";
import { createContext, useState } from "react";

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Viewcart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
