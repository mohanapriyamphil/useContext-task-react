import { useContext, useEffect, useState } from "react";
import "../Styles/Viewcart.css";
import { CartContext } from "../App";

export const Viewcart = () => {
  const { cart } = useContext(CartContext)

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((accu, curr) => accu + parseInt(curr.price), 0))
  }, [cart])
  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {
          cart.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="img">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="cart-product-details">
                <h3>Model: {product.title}</h3>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          ))
        }
      </div>
      <h2 className="total">Total Amount: ${total}</h2>
    </>
  );
};

