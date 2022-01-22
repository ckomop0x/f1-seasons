import { HeaderStyled, Logo } from '../styles';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <HeaderStyled>
      <Logo href="/" title="Formula 1 winners application" data-cy="logo">
        <img src="/icons/racing.svg" alt="Formula 1 winners application" />
        <span className="logo-title">F1 Standings</span>
      </Logo>
    </HeaderStyled>
  );
};

export default Header;
