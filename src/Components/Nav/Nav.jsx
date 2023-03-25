import React from 'react'
import "./Nav.css";
import { FaHome, FaBookOpen, FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useState } from 'react';
const Nav = () => {
    const [nav, setNav] = useState("#")
    return (
        <nav>
            <a href='#' onClick={() => setNav('#')}
                className={nav === '#' ? 'action' : ""}>
                <FaHome /></a>
            <a href='#about' onClick={() => setNav('#about')}
                className={nav === '#about' ? 'action' : ""}>
                <FaUserAlt /></a>
            <a href='#experience'
            onClick={() => setNav('#experience')}
                className={nav === '#experience' ? 'action' : ""}>
                <FaBookOpen /></a>
            <a href='#contact' onClick={() => setNav('#contact')}
                className={nav === '#contact' ? 'action' : ""}>
                <AiFillMessage /></a>
        </nav>
    )
}

export default Nav;