import React,{useState} from 'react';
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import "./Navbar.style.css"

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(true)
    return (
        <nav>
            <div className="topNav">
                <div className="airLogo">
                <img src="" alt="" />
                </div>
                {/* FaAlignJustify */}
                <div className="menu" onClick={() => setMenuIcon(!menuIcon)}>
                    <div className="meuIcon">
                        {menuIcon && <FaBars />}
                        {!menuIcon && <FaTimes />}
                    </div>
                    <ul className={menuIcon ? `menuList`: `menuList displayMenu`}>
                        <li className="menuItems">Home</li>
                        <li className="menuItems">News</li>
                        <li className="menuItems dropdown">About {<FaAngleDown />}
                            <ul className="dropdownMenu">
                                <li className="dropdownItem">Mission Statement</li>
                                <li className="dropdownItem">Research Programs</li>
                                <li className="dropdownItem">A2IR2 Seminars Series</li>
                            </ul>
                        </li>
                        <li className="menuItems dropdown">People {<FaAngleDown />}
                            <ul className="dropdownMenu">
                                <li className="dropdownItem">Principal Investigators</li>
                                <li className="dropdownItem">Researchers</li>
                                <li className="dropdownItem">Industrial Partners/Research Associates</li>
                                <li className="dropdownItem">Research Assistants</li>
                                <li className="dropdownItem">Alumni</li>
                                <li className="dropdownItem">Advisory Board</li>
                            </ul>
                        </li>
                        <li className="menuItems dropdown">Research {<FaAngleDown />}
                            <ul className="dropdownMenu">
                                <li className="dropdownItem">Ongoing projects</li>
                                <li className="dropdownItem">Publications</li>
                                
                            </ul>
                        </li>
                        <li className="menuItems">Contact</li>
                    </ul>
                </div>
            </div>
            <div className="otherLogos">
                <img src="" alt="" />
                <img src="" alt="" />
                <p>{`Dept. of Electronic & Electrical Engineering Obafemi Awolowo University, Ile-Ife`}</p>
            </div>
            
            

        </nav>
    )
}

export default Navbar
