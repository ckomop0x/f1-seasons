import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme } from '../../theme/theme';

export const FooterStyled = styled.div(
  ({ theme }: { theme: Theme }) => css`
    text-align: center;
    margin: 0;
    font-size: 0.8125rem;
    background: ${theme.colors.gray1};
    color: white;
    padding: ${theme.sizes.grid * 2}px;

    a {
      color: white;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  `,
);
