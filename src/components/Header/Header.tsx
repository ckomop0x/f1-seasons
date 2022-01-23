import { FC } from 'react';
import { HeaderStyled } from 'styles/HeaderStyled';
import Logo from 'styles/Logo';

const Header: FC = () => {
  const headerTitle = 'F1 Standings';

  return (
    <HeaderStyled>
      <Logo href="/" title={headerTitle} data-cy="logo">
        <img src="/icons/racing.svg" alt={headerTitle} />
        <span>{headerTitle}</span>
      </Logo>
    </HeaderStyled>
  );
};

export default Header;
