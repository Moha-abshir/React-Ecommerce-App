import { NavLink } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { GrUserNew } from "react-icons/gr";
import { BsMoonStars } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import './nav.css'
export function Nav(){
    return(
        <nav>
            <div className="logo">
                <NavLink to='/' className='logo-link'><p>React Shop</p></NavLink>
            </div>

            <div className="nav-links">
                <NavLink to='/' className='links'>Home</NavLink>
                <NavLink to='/about' className='links'>About</NavLink>
                <NavLink to='/products' className='links'>Products</NavLink>
            </div>

            <div className="user-part">
                <div className=" action">
                    <IoLogInOutline style={{ marginRight: '8px' }} size={20}/> <span >Login</span>
                </div>

                <div className="action">
                    <GrUserNew style={{ marginRight: '8px'}} size={20}/> <span >Sign In</span>
                </div>

                <div>
                    <button><BsMoonStars color="rgb(0, 217, 255)" size={20}/></button>
                </div>

                <div>
                    <button><FaGithub color="white" size={20}/></button>
                </div>
            </div>
        </nav>
    )
}