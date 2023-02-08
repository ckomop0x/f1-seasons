import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import styles from './Logo.module.scss';

interface LogoProps {
  link?: string;
  title?: string;
}

const Logo: FC<PropsWithChildren<LogoProps>> = ({
  link = '/',
  children,
  title,
}) => (
  <Link href={link} className={styles.wrapper} title={title}>
    {children}
  </Link>
);

export default Logo;
