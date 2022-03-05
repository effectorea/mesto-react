import React from 'react';
import headerLogo from '../images/logo.svg';

function Header() {
    return(
        <div>
            <header class="header">
            <img src={headerLogo} alt="Логотип Место" class="header__logo" />
            </header>
        </div>
    );
}

export default Header;