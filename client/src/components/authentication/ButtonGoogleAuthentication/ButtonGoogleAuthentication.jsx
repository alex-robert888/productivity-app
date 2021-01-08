import React from "react";
import "./ButtonGoogleAuthentication.scss";
import googleLogo from '../../../assets/images/google-logo.svg';

const ButtonGoogleAuthentication = () => {
    return (
        <button className="button button-google-authentication">
            <img src={googleLogo} alt="google logo"/>
            <span>Sign in with Google</span>
        </button>
    );
}

export default ButtonGoogleAuthentication;