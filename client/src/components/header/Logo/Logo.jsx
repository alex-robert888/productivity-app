import React from 'react';
import { useHistory } from 'react-router-dom';
import './Logo.scss';
import '../../../assets/global-style/_classes.scss';
import logo from '../../../assets/images/logo.svg';
import * as pageUrls from '../../../global/pageUrls';

const BaseLogo = () => {
    let history = useHistory();

    // Redirects client to the home page
    function handleOnClick(e) {
        e.preventDefault();
        history.push(pageUrls.URL_HOME_PAGE);
    }

    return (
        <button className='base-logo button--with-image' onClick={handleOnClick}>
            <img src={logo} alt="aimsky logo" />
        </button>
    );
}

export default BaseLogo;