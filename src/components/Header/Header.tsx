import { HeaderStyled, Logo } from '../../styles';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Logo href="/" title="Formula 1 winners application" data-cy="logo">
        <Image src="/racing.svg" alt="Formula 1 winners application" width={32} height={32}/>
        <span className="logo-title">F1 Standings</span>
      </Logo>
    </HeaderStyled>
  );
};

export default Header;
