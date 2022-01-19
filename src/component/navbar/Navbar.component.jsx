import React,{useState} from 'react';
import Logo from '../../assets/logo.png';
import eee from '../../assets/eee-logo.jpg';
import oau from '../../assets/oau-logo.png';
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import "./Navbar.style.css"

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(true);
    const [aboutMenu, setAboutMenu] = useState(true);
    const [peopleMenu, setPeopleMenu] = useState(true);
    const [researchMenu, setResearchMenu] = useState(true);
    return (
        <nav>
            <div className="topNav">
                <div className="airLogo">
                <img src={Logo} alt="" />
                </div>
                {/* FaAlignJustify FaTimes*/}
                <div className="menu" >
                    <div className="menuIcon" onClick={() => setMenuIcon(!menuIcon)}>
                        {menuIcon && <FaBars className='iconSize'/>}
                        {!menuIcon && <FaTimes className='iconSize' />}
                    </div>
                </div>
                <ul className={menuIcon ? `menuList`: `menuList displayMenu`}>
                    <li className="menuItems">Home</li>
                    <li className="menuItems">News</li>
                    <li className="menuItems dropdown" onClick={() => setAboutMenu(!aboutMenu)}>About {<FaAngleDown />}
                        <ul className={aboutMenu ? `dropdownMenu hideMenu`: `dropdownMenu`}>
                            <li className="dropdownItem">Mission Statement</li>
                            <li className="dropdownItem">Research Programs</li>
                            <li className="dropdownItem">A2IR2 Seminars Series</li>
                        </ul>
                    </li>
                    <li className="menuItems dropdown" onClick={() => setPeopleMenu(!peopleMenu)}>People {<FaAngleDown />}
                        <ul className={peopleMenu ? `dropdownMenu hideMenu`: `dropdownMenu`}>
                            <li className="dropdownItem">Principal Investigators</li>
                            <li className="dropdownItem">Researchers</li>
                            <li className="dropdownItem">Industrial Partners/Research Associates</li>
                            <li className="dropdownItem">Research Assistants</li>
                            <li className="dropdownItem">Alumni</li>
                            <li className="dropdownItem">Advisory Board</li>
                        </ul>
                    </li>
                    <li className="menuItems dropdown" onClick={() => setResearchMenu(!researchMenu)}>Research {<FaAngleDown />}
                        <ul className={researchMenu ? `dropdownMenu hideMenu`: `dropdownMenu`}>
                            <li className="dropdownItem">Ongoing projects</li>
                            <li className="dropdownItem">Publications</li>
                            
                        </ul>
                    </li>
                    <li className="menuItems">Contact</li>
                </ul>
            </div>
            <div className="otherLogos">
                <img src={oau} alt="" />
                <img src={eee} alt="" />
                <p>{`Dept. of Electronic & Electrical Engineering Obafemi Awolowo University, Ile-Ife`}</p>
            </div>
            
            

        </nav>
    )
}

export default Navbar
