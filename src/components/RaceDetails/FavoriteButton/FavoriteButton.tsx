import { FC, PropsWithChildren } from 'react';

const FavoriteButton: FC<PropsWithChildren> = ({ children }) => (
  <button>{children}</button>
);

export default FavoriteButton;
