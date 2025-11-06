import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/Home/HomePage";
import { Products } from "./Components/products/Products";
import { ProductDetail } from "./Components/products/ProductDetail";
import { useEffect, useState } from "react";
import axios from "axios";

export function App() {

    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        const getProducts = async function () {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products');
            setProducts(res.data);
        }
        getProducts();
    }, []);
    return(
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="products" element={<Products products={products}/>}/>
            <Route path="products/:id" element={<ProductDetail products={products}/>}/>
            
        </Routes>
    )
}
