import axios from "axios";
import { Nav } from "../nav/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import "./signUpLogin.css";

export function SignUp() {
    const [warningMessage, setWarningMessage] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        acceptTerms: false,
    });

    const defaultAvatar = "https://api.lorem.space/image/face?w=640&h=480&r=867";

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((previousState) => ({
            ...previousState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        console.log("Form submitted");
        e.preventDefault();
        setShowWarning(false);
        setWarningMessage("");

        // Basic client-side checks
        const email = formData.email.trim();
        if (!email) {
            setWarningMessage("Please enter an email.");
            setShowWarning(true);
            return;
        }
        if (!formData.acceptTerms) {
            setWarningMessage("You must accept the terms and conditions.");
            setShowWarning(true);
            return;
        }

        try {
            // 1) Check availability by fetching all users (since is-available endpoint is broken)
            const usersRes = await axios.get("https://api.escuelajs.co/api/v1/users");
            const existingUser = usersRes.data.find((u) => u.email === email);

            if (existingUser) {
                setWarningMessage("Email already taken");
                setShowWarning(true);
                return;
            }
            
            // Email is available, proceed to create user
            const createRes = await axios.post("https://api.escuelajs.co/api/v1/users/", {
                name: `${formData.fname} ${formData.lname}`.trim(),
                email,
                password: formData.password,
                avatar: defaultAvatar,
            });

            console.log("User created successfully:", createRes.data);
            alert("Sign up successful!");

            // Reset form
            setWarningMessage("");
            setShowWarning(false);
            setFormData({
                fname: "",
                lname: "",
                email: "",
                password: "",
                acceptTerms: false,
            });
            
        } catch (error) {
            // If the availability endpoint returns 4xx/5xx or network error, handle gracefully
            console.error("Signup flow error:", error?.response?.data || error.message || error);
            // If API returned a body with a message, show that
            const apiErrorMessage =
            error?.response?.data?.message || error?.response?.data || error.message;
            setWarningMessage(String(apiErrorMessage) || "Sign up failed. Please try again.");
            setShowWarning(true);
        }
    };

    return (
    <>
        <Nav />
        <section className="auth-section">
            <div className="welcome-message">
                <div className="title">
                <h3>Create an Account!</h3>
                </div>
                <div>
                <p className="small-intro">Do not miss out on this season&rsquo;s FLASH Sales</p>
                </div>
            </div>

            <form method="POST" onSubmit={handleSubmit}>
                <div className="title">
                Sign Up <IoMdCreate />
                </div>

                <input type="text" name="fname" id="fname" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lname" id="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} required />
                <input className="special-email-input" type="email" name="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required/>
                <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
                {showWarning && <div className="warning-message">{warningMessage}</div>}
                <div>
                    <input type="checkbox" name="acceptTerms" id="acceptTerms" className="checkbox" checked={formData.acceptTerms} onChange={handleChange}/>
                    {" "}
                    <p className="accept"> <Link to="./terms">Accept Term&rsquo;s and conditions</Link></p>
                </div>
                <button type="submit">Complete Sign Up</button>
            </form>
        </section>
    </>
);
}
