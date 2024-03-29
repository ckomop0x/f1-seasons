import { FC, PropsWithChildren } from 'react';

import styles from './Container.module.scss';

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Container;
