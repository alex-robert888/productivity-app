import React from 'react';
import './Header.scss';
import '../../assets/global-style/_classes.scss';
import BaseLogo from '../base/BaseLogo';


const Header = () => {
    return (
        <header id='header' className="page--padding">
            <BaseLogo />
        </header>
    );
}

export default Header;