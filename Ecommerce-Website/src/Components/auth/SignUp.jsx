import axios from "axios";
import { Nav } from "../nav/Nav"
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import './signUpLogin.css'

export function SignUp(){
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        acceptTerms: false // Added for terms and conditions checkbox
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(previousState => ({
            ...previousState,
            [name]: type === 'checkbox' ? checked : value // Handle checkbox 'checked' property
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
                "name": `${formData.fname} ${formData.lname}`,
                "email": formData.email,
                "password": formData.password,
                "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"
            });
            console.log('User created successfully:', response.data);
            alert('Sign up successful!');
            setFormData({
                fname: '',
                lname: '',
                email: '',
                password: '', 
                acceptTerms: false 
            });
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Sign up failed. Please try again.');
        }
    };

    

    return(
        <>
            <Nav/>
            <section className="auth-section">
                <div className="welcome-message">
                    <div className="title"><h3>Create an Account!</h3></div>
                    <div>
                        <p className="small-intro">Do not miss out on this season&rsquo;s FLASH Sales</p>
                    </div>
                </div>
                    <form method="POST" onSubmit={handleSubmit}> 
                        <div className="title">Sign Up <IoMdCreate/></div>
                        <input type="text" name="fname" id="fname" placeholder="First Name" value ={formData.fname} onChange={handleChange} required/>
                        <input type="text" name="lname" id="lname" placeholder="Last Name" value ={formData.lname} onChange={handleChange} required/>
                        <input type="email" name="email" id="email" placeholder="Email Address" value ={formData.email} onChange={handleChange} required/>
                                <input type="password" name="password" id="password"  placeholder="password" value ={formData.password} onChange={handleChange} required/>
                        
                                <div><input type="checkbox" name="acceptTerms" id="acceptTerms" className="checkbox" checked={formData.acceptTerms} onChange={handleChange}/> <p className="accept">Accept Term&rsquo;s and conditions</p></div>
                                <button type="submit">Complete Sign Up</button>
                                <div className="msg"></div>
                            </form>
                        </section>        </>
    )   
}