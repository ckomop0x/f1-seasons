import * as React from 'react';
import {header, logo, logoText, logoImage} from './header.css';

const Header = () => {
    return (
        <header className={header}>
            <a href="/" title="Formula 1 winners application" className={logo}>
                <img src={require('../../../icons/racing.svg')} alt="Logo" className={logoImage}/>
                <span className={logoText}>F1 standings application</span>
            </a>
        </header>
    )
};

export default Header;