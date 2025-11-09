import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/Home/HomePage";
import { Products } from "./Components/products/Products";
import { ProductDetail } from "./Components/products/ProductDetail";
import { Cart } from "./Components/cart/Cart";
import { useEffect, useState } from "react";
import axios from "axios";


export function App() {

    const [products, setProducts] = useState([]);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [productName, setProductName] = useState('');
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleMin = function(e){
        setMin(e.target.value)
    }
    const handleMax = function (e){
        setMax(e.target.value)
    }   
    const handleName = function (e){
        setProductName(e.target.value)
    }
    const addToCart = function (id){
        const product = products.find(p => p.id === id);
        const itemInCart = cartItems.find(item => item.id === id);

        if (itemInCart) {
            setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    const removeFromCart = function (id){
        setCartItems(cartItems.filter(item => item.id !== id));
    }

    const decreaseQuantity = function (id){
        const itemInCart = cartItems.find(item => item.id === id);
        if (itemInCart.quantity === 1) {
            removeFromCart(id);
        } else {
            setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
        }
    }
    
    useEffect(()=>{
        const getProducts = async function () {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products',{
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
            <Route path="cart" element={<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} decreaseQuantity={decreaseQuantity}/>}/>
            
        </Routes>
    )
}
