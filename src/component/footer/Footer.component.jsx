import React from 'react';
import Logo from '../../assets/flogo.png';
import {FaPhoneVolume, FaEnvelopeOpenText, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
import './footer.style.css';

const Footer = () => {
    return (
        <div className='footer container'>
            <div className="footervision">
                <img src={Logo} alt="Air logo" />
                <p>The vision for this research lab was borne out of the desire to formally bring together, graduate students at OAU Ile-Ife and Nigerian academics diaspora in the era of artificial intelligence and robotics.</p>
            </div>
            <div className="footerContact">
                <h2>CONTACT</h2>
                <p>Applied Artificial Intelligence and Robotics Research Lab 
                    Room PY G17, Faculty of Science Building,
                    Obafemi Awolowo University,
                    Ile-Ife, Osun 220005,
                    Nigeria</p>
                <p>{<FaPhoneVolume />}+ 234 703 070 5929</p>
                <p>{<FaEnvelopeOpenText />}philip.ogunbona@gmail.com</p>
            </div>
            <div className="footerLinks">
                <h2>LINKS</h2>
                <ul>
                    <li>Research Programs</li>
                    <li>Ongoing Project</li>
                    <li>Publications</li>
                    <li>News</li>
                </ul>
            </div>
            <div className="socialMedia">
                <h2>SOCIAL MEDIA</h2>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
            </div>
            <hr />
            <div className="footnote">
                <p>© 2022  APPLIEDAIR </p>
            </div>
        </div>
    )
}

export default Footer
