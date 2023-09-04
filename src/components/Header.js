import React from "react"
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [openMenu, setOpenMenu] = useState("")

    function toggleMenu() {
        setOpenMenu(prevOpenMenu => prevOpenMenu === "" ? "menu-open" : "")
    }

    return(
        <header>
            <div className="mobile-menu">
                <div className="menu-icon" onClick={() => toggleMenu()}></div>
                <h1 className="header-h1-mobile">G.S. DIGITAL ANCHOR</h1>
            </div>
            <ul className={`${openMenu} menu`}>
                <Link to="/about"><li>ABOUT</li></Link>
                <Link to="/services"><li>SERVICES</li></Link>
                <Link to="/"><li className="header-h1">G.S. DIGITAL ANCHOR</li></Link>
                <Link to="/portfolio"><li>PORTFOLIO</li></Link>
                <Link to="/inquire"><li>INQUIRE</li></Link>
            </ul>
        </header>

    )
}
