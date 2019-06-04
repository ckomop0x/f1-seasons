import * as React from 'react';
import { HeaderStyled, Logo } from '../styles';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Logo href="https://ckomop0x.github.io/f1-winners-app/"
            title="Formula 1 winners application"
            data-cy="logo">
        <img src={require('../../../icons/racing.svg')} alt="Logo" />
        <span className="logo-title">F1 Standings</span>
      </Logo>
    </HeaderStyled>
  );
};

export default Header;
