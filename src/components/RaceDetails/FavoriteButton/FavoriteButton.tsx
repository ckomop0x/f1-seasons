import { FC, PropsWithChildren } from 'react';

import styles from './FavoriteButton.module.scss';

const FavoriteButton: FC<PropsWithChildren> = ({ children }) => (
  <button className={styles.wrapper}>{children}</button>
);

export default FavoriteButton;
