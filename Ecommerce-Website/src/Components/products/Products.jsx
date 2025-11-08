import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosSearch } from "react-icons/io";
import { Nav } from "../nav/Nav";
import { ProductFilter } from './ProductFilter';
import { ProductGrid } from './ProductGrid';
import './products.css';


export function  Products({products, handleMin, handleMax, min, max}){
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isShown, setIsShown] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(()=>{
        setFilteredProducts(products)
    },[products])

    useEffect(() => {
        try {
            const getCategories = async function (){
            const res = await axios.get('https://api.escuelajs.co/api/v1/categories');
            const arrayOfCategoryObjects = (res.data);
            const categoryNames = arrayOfCategoryObjects.map(cat => cat.name);
            setCategories(['All', ...categoryNames]);
        }
        getCategories();
        } catch (error) {
            console.error('Failed to fetch Products', error)
        }
        finally{
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return(
            <>
                <h2 className='loading'>Fetching data</h2>
                <div className='load'>Spinner</div>
            </>
        )
    }

    const filterProducts = function (categoryId){
            if(categoryId === "All"){
                setFilteredProducts(products)
            }
            else{
                const necessaryDisplayedProduct = products.filter(p=> p.category.name === categoryId)
                setFilteredProducts(necessaryDisplayedProduct)
            }
        }
    return(
        <>
            <Nav/>
            
            <main>
                <div className={`back-opacity ${isShown ? 'show' : ''}`} onClick={()=>{setIsShown(false)}}></div>
                <section className="categories">
                    <ul className='cat-lists'>
                        {
                            categories.map((cat, index)=>{                      
                                return(
                                    <li key={index} className='cart-items' onClick={()=>{filterProducts(cat)}}>
                                        {cat}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>

                <section className="product-section">
                    <div className="filter-search">
                        <div className='filter' onClick={()=>{setIsShown(true)}}>
                            Filter
                        </div>

                        <div className="search">
                            <div><IoIosSearch size={25} style={{ marginRight: '10px'}}/></div>
                            <div><input type="text" placeholder='Search'/></div>
                        </div>
                    </div>
                    <ProductFilter isShown={isShown} setIsShown={setIsShown} handleMin={handleMin} handleMax={handleMax} min={min} max={max}/>
                    <ProductGrid filteredProducts={filteredProducts} />
                    
                </section>
                
            </main>
            
        </>
    )
}
Products.propTypes = {
  products: PropTypes.array.isRequired,
  handleMin: PropTypes.func.isRequired,
  handleMax: PropTypes.func.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired
};