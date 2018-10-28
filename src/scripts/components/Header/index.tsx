import * as React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    background: #501a26;
    padding: 16px;
    width: 100%;
    flex-shrink: 0;
    margin: 0;
    box-shadow: rgba(0, 0, 0, 0.4) 0 0 9px 5px;
    position: relative;
`;

const Logo = styled.a`
    text-decoration: none;
    line-height: 32px;
    vertical-align: top;
    display: inline-block;
    
    img {
        width: 32px;
        line-height: 32px;
        vertical-align: top;
        display: inline-block;
    }
    
    span {
        color: #ffffff;
        font-weight: bold;
        padding-left: 16px;
        font-size: 28px;
        text-transform: uppercase;
        line-height: 32px;
        vertical-align: top;
        display: inline-block;
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <Logo href="/" title="Formula 1 winners application">
                <img src={require('../../../icons/racing.svg')} alt="Logo"/>
                <span>F1 Standings</span>
            </Logo>
        </HeaderStyled>
    )
};

export default Header;