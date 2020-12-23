import React from 'react';
import './BaseCloseIcon.scss';
import '../../assets/global-style/_classes.scss';
import closeIcon from '../../assets/images/close-icon.svg';

const BaseCloseIcon = () => {
    return (
        <button className='base-close-icon button--with-image flex--push-right'>
            <img src={closeIcon} alt="close icon" />
        </button>
    );
}

export default BaseCloseIcon;