import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/Home/HomePage";
import { Products } from "./Components/products/Products";
import { ProductDetail } from "./Components/products/ProductDetail";
import { Cart } from "./Components/cart/Cart";
import { Login } from "./Components/auth/Login";
import { SignUp } from "./Components/auth/SignUp";
import { NotFound } from "./Components/NotFound";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { About } from "./Components/about/About";
import { TermsAndConditions } from "./Components/TermsAndConditions";
import { Product } from "./types/type";


export function App() {

    const [products, setProducts] = useState<Product[]>([]);
    const [min, setMin] = useState<string>('');
    const [max, setMax] = useState<string>('');
    const [productName, setProductName] = useState<string>('');
    const [cartItems, setCartItems] = useState<Product[]>(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleMin = function(e: React.ChangeEvent<HTMLInputElement>){
        setMin(e.target.value)
    }
    const handleMax = function (e: React.ChangeEvent<HTMLInputElement>){
        setMax(e.target.value)
    }   
    const handleName = function (e: React.ChangeEvent<HTMLInputElement>){
        setProductName(e.target.value)
    }
    const addToCart = function (id: number){
        const product = products.find(p => p.id === id);
        const itemInCart = cartItems.find(item => item.id === id);

        if(!product){
            alert("Cannot find product that matches the id")
        }
        else{
            if (itemInCart) {
                setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
            } else {
                setCartItems([...cartItems, { ...product, quantity: 1 }]);
            }
        }
        
    }

    const removeFromCart = function (id: number){
        setCartItems(cartItems.filter(item => item.id !== id));
    }

    const decreaseQuantity = function (id: number){
        const itemInCart = cartItems.find(item => item.id === id);
        if(!itemInCart){
            alert("No item that matches the given product Id matches those that exist in the cart!")
        }
        else{
            if (itemInCart.quantity === 1) {
                removeFromCart(id);
            } else {
                setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
            }
        }
        
    }
    
    useEffect(()=>{
        const getProducts = async function () {
            const res = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products',{
                params:{
                    title:productName,
                    price_min : min,
                    price_max : max
                }
            });
            setProducts(res.data);
        }
        getProducts();
    }, [min, max, productName]);
    return(
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="products" element={<Products products={products} handleMin={handleMin} handleMax={handleMax} min={min} max={max} handleName={handleName} productName={productName} addToCart={addToCart} cartItems={cartItems}/>}/>
            <Route path="products/:id" element={<ProductDetail products={products} addToCart={addToCart}/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="cart" element={<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} decreaseQuantity={decreaseQuantity}/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signUp" element={<SignUp/>}/>
            <Route path="terms" element={<TermsAndConditions/>}/>
            <Route path = '*' element={<NotFound/>}/>
        </Routes>
    )
}
