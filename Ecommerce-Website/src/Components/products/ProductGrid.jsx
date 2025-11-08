import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './productgrid.css';
import noProducts  from '../../assets/no-products.png'

export function ProductGrid({filteredProducts}){

    if (filteredProducts.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', fontSize: '1.2em', color: '#888' }}>
                <img src={noProducts} alt="noProductsFound"/>
            </div>
        );
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
  filteredProducts: PropTypes.array.isRequired,
};