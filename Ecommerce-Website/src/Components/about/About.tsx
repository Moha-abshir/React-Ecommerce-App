import { Nav } from "../nav/Nav";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import './about.css'
import { Link } from "react-router-dom";
export function About(){
    return(
        <>
            <Nav/>
            <section className="about">
                <div className="about-me">
                    <h2>About Developer</h2>
                    <div>
                        <p>
                            Hello there! I am <span className="name">Mohammed Abshir</span>, the passionate developer behind this website. With a keen eye for detail and a love for crafting seamless digital experiences, I set out to create a unique and user-friendly online shopping platform.
                        </p>
                    </div>
                </div>

                <div className="technologies-used">
                    <h2>Libraries and Technologies Used</h2>
                    <div>
                        <p>
                            In the development of this website, I have harnessed the power of the following frameworks and technologies to create a modern, single-page application (SPA):
                        </p>
                        <div className="technologies">
                            <FaReact display='block' className="react"/>  <FaJs display='block' className="js"/> <FaCss3 display='block' className="css"/>
                        </div>
                    </div>
                </div>

                <div className="lets-connect">
                    <h2>Lets Connect</h2>
                    <div>
                        <p>
                            Explore the website, discover the offerings, and if you have any questions or suggestions, I am here to listen. Your journey through this online shopping experience is as important to me as it is to you. Happy exploring!
                        </p>
                        <div className="connect">
                            <Link to='https://www.linkedin.com/in/mohammed-abshir001' target="blank">
                                <FaLinkedin display='block' className="linkdin"/>
                            </Link>  
                            
                            <Link to='https://github.com/Moha-abshir' target="blank">
                                <FaGithub display="block" className="git2"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-about">
                    <div className="provider-about">
                        <span>Data Provided by </span> <a className='provide-about' href="https://fakeapi.platzi.com">Platzi Fake Store API</a>
                    </div>
                    <div className="contact-about">
                        <p> &copy; 2025 | <a className='git' href="https://github.com/Moha-abshir">Moha Abshir</a></p>
                    </div>
                </div>
            </section>
            
        </>
    )
}