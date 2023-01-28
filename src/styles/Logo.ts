import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme } from '../theme/theme';

export const Logo = styled.a(
  ({ theme }: { theme: Theme }) => css`
    text-decoration: none;
    line-height: 32px;
    vertical-align: top;
    display: inline-block;

    img {
      width: ${theme.sizes.grid * 4}px;
      line-height: ${theme.sizes.grid * 4}px;
      vertical-align: top;
      display: inline-block;
    }

    span {
      font-family: ${theme.secondaryFont};
      color: #ffffff;
      font-weight: bold;
      padding-left: ${theme.sizes.grid * 2}px;
      font-size: 1.75rem;
      line-height: ${theme.sizes.grid * 4}px;
      vertical-align: top;
      display: inline-block;
    }
  `,
);
