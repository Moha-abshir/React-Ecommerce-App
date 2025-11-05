import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { Nav } from "./Nav";
import './products.css';



export function  Products(){
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isShown, setIsShown] = useState(false);


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
                                    <li key={index} className='cart-items'><a className='cart-item-link' href="#">{cat}</a></li>
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
                    <div className={`filter-option ${isShown ? 'show' : ''}`}>
                        <div className="title"><h3>Filter</h3></div>
                        <div className='cat'>
                            <div>Category:</div>
                            <div>
                                <select name="category" id="category">
                                    <option value="default" >Default</option>
                                    <option value="clothes" >Clothes</option>
                                    <option value="electronics" >Electronics</option>
                                    <option value="furniture" >Furniture</option>
                                    <option value="shoes" >Shoes</option>
                                    <option value="miscellaneous" >miscellaneous</option>
                                </select>
                            </div>
                        </div>
                        <div className='price-estimate'>
                            <div>
                                <p>Price Range:</p>
                            </div>
                            <div className='estimator'>
                                <div><p>Min Price</p><input type="text"/></div>
                                <div><p>Max Price</p><input type="text"/></div>
                            </div>
                        </div>
                        <div className='exact-details'>
                            <div>
                                <p>Name of the Product:</p>
                                <input type="text"/>
                                <p className='warning'>Enter the name if you know exactly what you are looking for!</p>
                            </div>
                            <div>
                                <p>Exact Price:</p>
                                <input type="text"/>
                                <p className='warning'>Do not enter the exact price if you already estimated it within the range</p>
                            </div>
                        </div>

                        <div className='complete'>
                            <button>Complete Filtration</button>
                        </div>

                    </div>
                </section>
                
            </main>
            
        </>
    )
}