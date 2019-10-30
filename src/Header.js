import React from 'react';
import Logo from './Logo';
import Search from './Search';
import './styles/header.scss';

const Header = () => {
    return (
        <div className="container">
            <Logo className="logo" />
            <Search />
        </div>
    )
}

export default Header;
