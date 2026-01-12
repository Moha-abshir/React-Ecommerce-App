import PropTypes from 'prop-types';
import { Nav } from '../nav/Nav';
import { MdDeleteOutline } from "react-icons/md";
import './cart.css'

export function Cart({ cartItems, addToCart, removeFromCart, decreaseQuantity }){

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (cartItems.length === 0) {
        return (
            <>
                <Nav/>
                <div style={{ textAlign: 'center', padding: '20px', fontSize: '1.2em', color: '#888' }}>
                    <h2>Your cart is empty</h2>
                </div>
            </>
        );
    }

    return(
        <>
            <Nav/>
            <section className='cart-details-payments'>
                <div className='cart-section'>
                    {cartItems.map(product => (
                        <div className="cart-details" key={product.id}>
                            <div className="image-container">
                                <img src={product.images[0]} alt={product.title}/>
                            </div>

                            <div className="cart-actions">
                                <div className="product-name">
                                    <p>Product: {product.title}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Product Id: {product.id}</p>
                                </div>
                                <div className="add-or-subtract-product">
                                    <button className="minus" onClick={() => decreaseQuantity(product.id)}>−</button>
                                    <span className="number">{product.quantity}</span>
                                    <button className="plus" onClick={() => addToCart(product.id)}>+</button>
                                </div>
                                <div>
                                    <MdDeleteOutline className='deleteBtn' onClick={() => removeFromCart(product.id)}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="payment-summery">
                    <div className="title">PAYMENT SUMMERY</div>
                    <div className="price-details">
                        <div><p>Sub Total:</p> <p>${totalPrice.toFixed(2)}</p></div>
                        <div><p>Estimated Tax: </p><p>$0.00</p></div>
                    </div>
                    <div className="total">
                        <p>Total: </p> <p>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div><button>Checkout</button></div>
                </div>
            </section>
        </>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired
}