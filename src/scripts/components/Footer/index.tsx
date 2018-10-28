import * as React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    padding: 16px;
    background: #38383f;
    color: #ffffff;
    border-top: 1px solid #c2c2c2;
    width: 100%;
    box-sizing: border-box;
    position: relative;
`;

const Footer = () => {
    return (
        <FooterStyled>&copy; 2018 Pavel Klochkov</FooterStyled>
    )
};

export default Footer;