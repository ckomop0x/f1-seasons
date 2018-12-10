import * as React from 'react';
import {HeaderStyled, Logo} from './HeaderStyles';

const Header = () => {
    return (
        <HeaderStyled>
            <Logo href="https://ckomop0x.github.io/f1-winners-app/" title="Formula 1 winners application">
                <img src={require('../../../icons/racing.svg')} alt="Logo" />
                <span>F1 Standings</span>
            </Logo>
        </HeaderStyled>
    );
};

export default Header;
