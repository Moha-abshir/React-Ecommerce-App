import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './productgrid.css';
import { FaCheck } from "react-icons/fa";
import noProducts  from '../../assets/no-products.png'

export function ProductGrid({filteredProducts, addToCart}){
    const [check, setCheck] = useState(false);

    if (filteredProducts.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', fontSize: '1.2em', color: '#888' }}>
                <img src={noProducts} alt="noProductsFound"/>
            </div>
        );
    }
    

    const handleTwoFunction = function(id){
        addToCart(id)
        setCheck(true);

        setTimeout(() => {
            setCheck(false)
        }, 1000);
    }

    return(
        <div className="product-grid">

            {filteredProducts.map((product)=>{

                return(
                    <div className='product' key={product.id}>
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
            })}
            
        </div>
    )
}
ProductGrid.propTypes = {
  filteredProducts: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};