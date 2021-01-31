import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';
import '../../../assets/global-style/_classes.scss';
import Logo from '../Logo/Logo';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import profileIcon from '../../../assets/images/profile-icon.svg';

const Header = () => {
    const history = useHistory();

    return (
        <header id='header' className="page--padding">
            <Logo />
            <div>
                <button 
                    id="button-profile"
                    className="button--no-fill--no-border"
                    onClick={() => history.push("/user/profile")}
                >
                    <img src={profileIcon} alt="profile icon    " />
                </button>
                <HamburgerMenu className='header__hamburger-menu' />
            </div>
        </header>
    );
}

export default Header;