import { Nav } from "./nav/Nav"
import { SignUp } from "./auth/SignUp"
import { Link } from "react-router-dom"
export function TermsAndConditions(){
    return(
        <>
        <Nav></Nav>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae cum commodi, nam magnam eligendi ipsam sint perspiciatis, nihil harum voluptas eveniet quas tenetur earum laudantium similique est doloremque officiis.

        </div>
        <button> <Link to='/signUp'> return to sign up page</Link></button>
        </>
    )
}