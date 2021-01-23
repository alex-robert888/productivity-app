import React from "react";
import "./HamburgerMenu.scss";
import hamburgerMenu from '../../../assets/images/hamburger-menu.svg';
import '../../../assets/global-style/_classes.scss';

const HamburgerMenu = () => {
    return (
        <button className="hamburger-menu button--no-fill--no-border">
            <img src={hamburgerMenu} alt="hamburger menu" />
        </button>
    );
}

export default HamburgerMenu;