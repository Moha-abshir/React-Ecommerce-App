import axios from 'axios';
import './productgrid.css'
import { useEffect, useState } from 'react';
export function ProductGrid(){
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        const getProducts = async function () {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products');
            setProducts(res.data);
        }
        getProducts();
    }, []);

    console.log(products[0])
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
                                <p>Price: £${product.price}</p>
                            </div>
                        </div>
                        <div className="product-more-cta">
                            <button className='more'>More Detail</button>
                            <button className='cta'>Add To Cart</button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}