import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './productgrid.css';
export function ProductGrid({products}){
    

    return(
        <div className="product-grid">

            {products.map((product)=>{
                
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
                        <div className="product-more-cta">
                            <button className='more'>{
                                <Link to={`/products/${product.id}`}>More Detail</Link>
                            }</button>
                            <button className='cta'>Add To Cart</button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}
ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};