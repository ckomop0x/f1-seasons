import { FC, PropsWithChildren } from 'react';

const SeasonCardTitle: FC<PropsWithChildren> = ({ children }) => (
  <h2>{children}</h2>
);

export default SeasonCardTitle;
