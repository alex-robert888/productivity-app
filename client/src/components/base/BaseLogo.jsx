import React from 'react';
import '../base/BaseLogo.scss';
import '../../assets/global-style/_classes.scss';
import logo from '../../assets/images/logo.svg';


const BaseLogo = () => {
    return (
        <button className='base-logo button--with-image'>
            <img src={logo} alt="aimsky logo" />
        </button>
    );
}

export default BaseLogo;