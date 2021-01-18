import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';
import '../../assets/global-style/_classes.scss';
import BaseLogo from '../base/BaseLogo';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { selectCurrentPage } from '../../store/pagesSlice';

const Header = () => {
    const currentPage = useSelector(selectCurrentPage);

    return (
        <header id='header' className="page--padding">
            <BaseLogo />
            <HamburgerMenu />
        </header>
    );
}

export default Header;