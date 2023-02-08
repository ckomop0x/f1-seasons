import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import styles from './SeasonCardButton.module.scss';

interface SeasonCardButtonProps {
  link: string;
  title?: string;
}

const SeasonCardButton: FC<PropsWithChildren<SeasonCardButtonProps>> = ({
  children,
  link,
  title,
}) => (
  <Link href={link} title={title} className={styles.wrapper}>
    {children}
  </Link>
);

export default SeasonCardButton;
