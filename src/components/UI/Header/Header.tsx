import Image from 'next/image';
import { FC } from 'react';
import Logo from 'components/UI/Logo';

import styles from './Header.module.scss';

const Header: FC = () => (
  <header className={styles.wrapper}>
    <Logo link="/" title="Formula 1 standings">
      <Image
        src="/racing.svg"
        alt="Formula 1 winners application"
        width={32}
        height={32}
      />
      <span className="logo-title">F1 Standings</span>
    </Logo>
  </header>
);

export default Header;
