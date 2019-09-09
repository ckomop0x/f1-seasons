import * as React from 'react';
import { FooterStyled } from './FooterStyles';
import { version } from '../../../../package.json';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyled>
      &copy; {year} <a href="https://github.com/ckomop0x">Pavel Klochkov</a>, icons & flags by&nbsp;
      <a href="https://www.flaticon.com" target="_blank" rel="noreferrer noopener nofollow">
        Flaticon
      </a>
      . v{version}
    </FooterStyled>
  );
};

export default Footer;
