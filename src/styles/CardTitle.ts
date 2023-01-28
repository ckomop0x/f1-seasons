import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme } from '../theme/theme';

export const CardTitle = styled.h2(
  ({ theme }: { theme: Theme }) => css`
    margin: 0;
    padding: ${theme.sizes.grid * 2}px;
    text-align: center;
    font-family: ${theme.secondaryFont};
    background: ${theme.colors.gray1};
    color: white;
    height: ${theme.sizes.grid * 10}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  `,
);
