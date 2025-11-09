import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import './productgrid.css';
export function SingleProduct({product, addToCart}){
    const [check, setCheck] = useState(false);
    const handleTwoFunction = function(id){
        addToCart(id)
        setCheck(true);

        setTimeout(() => {
            setCheck(false)
        }, 1000);
    }

    return(
        <div className='product'>
            <div className='image-container'>
                <img src={`${product.images[0]}`} alt={product.title}/>
            </div>
            <div className="product-details">
                <div className="product-name">
                    <p>{product.title}</p>
                </div>
                <div className="product-price">
                    <p>Price: ${product.price}</p>
                </div>
            </div>
            <div className={`checked ${check===true ? 'active' : ''}`}>
                <FaCheck /> Added
            </div>
            <div className="product-more-cta">
                <button className='more'>{
                    <Link to={`/products/${product.id}`}>More Detail</Link>
                }</button>
                <button className='cta' onClick={()=>{handleTwoFunction(product.id)}}>Add To Cart</button>
            </div>
        </div>
    )
}
SingleProduct.propTypes = {
    product: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
};