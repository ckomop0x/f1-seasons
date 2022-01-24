import { FooterWrapper } from './styles';
import packageJSON from '../../../package.json';
import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      &copy; {currentYear} <a href="https://github.com/ckomop0x">Pavel Klochkov</a>. Icons & flags
      by{' '}
      <a href="https://www.flaticon.com" target="_blank" rel="noreferrer noopener nofollow">
        Flaticon
      </a>
      . v{packageJSON.version}
    </FooterWrapper>
  );
};

export default Footer;
