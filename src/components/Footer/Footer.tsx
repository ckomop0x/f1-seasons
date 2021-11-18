import { FooterStyled } from './FooterStyles';
import { version } from '../../../package.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      &copy; {currentYear} <a href="https://github.com/ckomop0x">Pavel Klochkov</a>. Icons & flags
      by&nbsp;
      <a href="https://www.flaticon.com" target="_blank" rel="noreferrer noopener nofollow">
        Flaticon
      </a>
      . v{version}
    </FooterStyled>
  );
}
