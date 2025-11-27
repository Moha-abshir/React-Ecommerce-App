import { Nav } from "../nav/Nav"
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import './signUpLogin.css'
export function SignUp(){
    return(
        <>
            <Nav/>
            <section className="auth-section">
                <div className="welcome-message">
                    <div className="title"><h3>Create an Account!</h3></div>
                    <div className="small-into">
                        <p>Do not miss out on this season&rsquo;s FLASH Sales</p>
                    </div>
                </div>
                    <form action="">
                        <div className="title">Sign Up <IoMdCreate/></div>
                        <input type="text" name="name" id="fname" placeholder="First Name"/>
                        <input type="text" name="name" id="lname" placeholder="Last Name"/>
                        <input type="email" name="name" id="email" placeholder="Email Address"/>
                        <input type="password" name="password" id="password"  placeholder="password"/>

                        <div className="accept"><Link to='/terms'><p>Accept Term&rsquo;s and conditions</p></Link></div>
                        <button type="submit">Complete Sign Up</button>
                    </form>
            </section>
        </>
    )   
}