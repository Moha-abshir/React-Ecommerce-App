import PropTypes from 'prop-types';

import { SingleProduct } from './SingleProduct';
import noProducts  from '../../assets/no-products.png'

export function ProductGrid({filteredProducts, addToCart}){

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
                    <SingleProduct key={product.id} product={product} addToCart={addToCart}/>
                )
            })}
            
        </div>
    )
}
ProductGrid.propTypes = {
  filteredProducts: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};