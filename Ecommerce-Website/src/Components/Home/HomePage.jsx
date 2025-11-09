import { Nav } from '../nav/Nav'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './homepage.css'

export function HomePage(){
    
    return(
        <>
            <Nav/>

            <main>
                <section className="homepage-hero">
      
                    <div className="hero-text">
                        
                        <h1 className="hero-headline">Why Pay More for Elegance? The Sale You’ve Been Waiting For.</h1> 
                        <p className="hero-subheadline">
                        Our biggest price drops of the season are here!! Luxury items at prices you’ll hardly believe. Don’t wait... these deals vanish fast.
                        </p>
                        
                        <div className="CTA">
                            
                                <button className="shop cta-btn">
                                    <Link to='/products'>
                                        <FaShoppingCart style={{ marginRight: '8px' }} /> 
                                        SHOP NOW
                                    </Link>
                                </button>
                            
                                
                                    <button className='cta-btn learn'> <Link to='/about'>Learn More</Link></button>
    
                        </div>
                    </div>

                </section>

                <section className="footer">
                    <div className="provider">
                        <span>Data Provided by </span> <a className='provide' href="https://fakeapi.platzi.com">Platzi Fake Store API</a>
                    </div>
                    <div className="contact">
                        <p> &copy; 2025 | <a className='git' href="https://github.com/Moha-abshir">Moha Abshir</a></p>
                    </div>
                </section>
            </main>

        </>
    )
}