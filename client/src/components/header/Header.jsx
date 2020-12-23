import React from 'react';
import './Header.scss';
import '../../assets/global-style/_classes.scss';
import BaseLogo from '../base/BaseLogo';
import BaseCloseIcon from '../base/BaseCloseIcon';


const Header = () => {
    return (
        <header id='header' className="page-section">
            <BaseLogo />
            <BaseCloseIcon />
        </header>
    );
}

export default Header;