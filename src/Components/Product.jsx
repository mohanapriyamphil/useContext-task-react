import PropTypes from 'prop-types';
import '../Styles/Product.css';
import { useContext } from 'react';
import { CartContext } from '../App';

export const Product = ({ product }) => {
    const { cart, setCart } = useContext(CartContext)
    const description = product.description.length > 31? product.description.substring(0, 30) + "..." : product.description;

    const addCart = () => {
        setCart([...cart, product]);
    }

    const removeCart = () => {
        setCart(cart.filter((item) => item.id !== product.id))
    }

  return (
    <div className="product">
        <div className="img">
            <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="details">
            <h3><strong>Model: </strong>{product.title}</h3>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Price: </strong>${product.price}</p>
            <div className='btn'>
                {
                    cart.includes(product)? (
                        <button className="removeCart" onClick={removeCart}>Remove from Cart</button>
                    ) : (
                        <button onClick={addCart}>Add to Cart</button>
                    )
                }
            </div>
            
        </div>
    </div>
  )
}

Product.propTypes = {
    product: PropTypes.object
}