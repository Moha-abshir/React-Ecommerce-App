import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/Home/HomePage";
import { Products } from "./Components/products/Products";
import { ProductDetail } from "./Components/products/ProductDetail";
import { useEffect, useState } from "react";
import axios from "axios";

export function App() {

    const [products, setProducts] = useState([]);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    const handleMin = function(e){
        setMin(e.target.value)
    }
    const handleMax = function (e){
        setMax(e.target.value)
    }
    
    useEffect(()=>{
        const getProducts = async function () {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products',{
                params:{
                    price_min : min,
                    price_max : max
                }
            });
            setProducts(res.data);
        }
        getProducts();
    }, [min, max]);
    return(
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="products" element={<Products products={products} handleMin={handleMin} handleMax={handleMax} min={min} max={max}/>}/>
            <Route path="products/:id" element={<ProductDetail products={products}/>}/>
            
        </Routes>
    )
}
