import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { Products } from "./Components/Products";
import './App.css'

export function App() {
    return(
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="products" element={<Products/>}/>
        </Routes>
    )
}
