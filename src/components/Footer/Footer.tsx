import { FooterStyled } from './FooterStyles';
import packageJson from '../../../package.json';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyled>
      &copy; {year} <a href="https://github.com/ckomop0x">Pavel Klochkov</a>. Icons & flags by&nbsp;
      <a href="https://www.flaticon.com" target="_blank" rel="noreferrer noopener nofollow">
        Flaticon
      </a>
      . v{packageJson.version}
    </FooterStyled>
  );
};

export default Footer;
