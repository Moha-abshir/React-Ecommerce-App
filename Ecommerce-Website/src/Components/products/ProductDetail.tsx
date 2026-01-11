import { useParams, Link } from "react-router-dom";
import { Product } from "../../types/type";
import { Nav } from "../nav/Nav";
import { GiReturnArrow } from "react-icons/gi";
import './productdetail.css'
interface ProductDetailProps{
    products: Product[],
    addToCart: (id: number)=> void
}

export function ProductDetail({products, addToCart}: ProductDetailProps){
    const {id} = useParams();
    const product = products.find(p=> Number(p.id)===Number(id));

    if (!product) {
        return (
            <>
                <Nav />
                <div className="not-found">
                    <h2>Product not found!</h2>
                    <Link to="/products" className="return-link">Back to Products</Link>
                </div>
            </>
        );
    }

    return(
        <>
            <Nav/>
            <div className="more-information">
                <div className="image-container">
                    <img src={`${product.images[0]}`} alt={product.title}/>
                </div>
                <div className="detail">
                    <div className="name">{product.title}</div>
                    <div className="category ">Category: {product.category.name}</div>
                    <div className="price">Price: ${product.price}</div>
                </div>
                <div className="description">
                    <h4>Description</h4>
                    <p>{product.description}</p>
                </div>
                <div className="navigate">
                    <Link to='/products'><button className="return"><GiReturnArrow size={40} color="white"/></button></Link>
                    <Link to='cart'><button className="add" onClick={()=>{addToCart(product.id)}}>Add To Cart</button></Link>
                </div>
            </div>
        </>
    )
}