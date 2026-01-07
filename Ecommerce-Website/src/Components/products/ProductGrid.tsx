import { SingleProduct } from './SingleProduct';
import {Product} from '../../types/type'
import noProducts  from '../../assets/no-products.png'

interface ProductGridProps{
    filteredProducts: Product[], //Filtered products is an array of objects
    addToCart: (id:number)=>void;
}
export function ProductGrid({filteredProducts, addToCart}: ProductGridProps){

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