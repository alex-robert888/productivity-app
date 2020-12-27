import React from 'react';
import { useHistory } from 'react-router-dom';
import './BaseCloseIcon.scss';
import '../../assets/global-style/_classes.scss';
import closeIcon from '../../assets/images/close-icon.svg';
import * as pageUrls from '../../global/pageUrls';

const BaseCloseIcon = () => {
    let history = useHistory();

    // TODO: Refactor this component to close the container that it is situated in
    // Redirects client to the home page
    function handleOnClick(e) {
        e.preventDefault();
        history.push(pageUrls.URL_HOME_PAGE);
    }

    return (
        <button className='base-close-icon button--with-image flex--push-right' onClick={handleOnClick}>
            <img src={closeIcon} alt="close icon" />
        </button>
    );
}

export default BaseCloseIcon;