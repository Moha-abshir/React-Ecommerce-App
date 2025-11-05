import sunglasses from '../assets/Sunglasses.jpeg';
import './productgrid.css'
export function ProductGrid(){
    return(
        <div className="product-grid">
            <div className='product'>
                <div className='image-container'>
                    <img src={sunglasses} alt="sunglasses" />
                </div>
                <div className="product-details">
                    <div className="product-name">
                        <p>Trendy Pink-Tinted Sunglasses</p>
                    </div>
                    <div className="product-price">
                        <p>Price: £38</p>
                    </div>
                </div>
                <div className="product-more-cta">
                    <button className='more'>More Detail</button>
                    <button className='cta'>Add To Cart</button>
                </div>
            </div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
            <div className='product'></div>
        </div>
    )
}