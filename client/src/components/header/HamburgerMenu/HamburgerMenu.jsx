import React from "react";
import "./HamburgerMenu.scss";
import hamburgerMenu from '../../../assets/images/hamburger-menu.svg';

const HamburgerMenu = () => {
    return (
        <button className="hamburger-menu">
            <img src={hamburgerMenu} alt="hamburger menu" />
        </button>
    );
}

export default HamburgerMenu;