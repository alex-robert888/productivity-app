import React from 'react';
import './Header.scss';
import '../../assets/global-style/_classes.scss';
import BaseLogo from '../base/BaseLogo';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

const Header = () => {

    return (
        <header id='header' className="page--padding">
            <BaseLogo />
            <HamburgerMenu className='header__hamburger-menu' />
        </header>
    );
}

export default Header;