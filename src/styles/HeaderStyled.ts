import styled from '@emotion/styled';
import { Theme } from '../theme/theme';
import { css } from '@emotion/react';

export const HeaderStyled = styled.header(
  ({theme}: {theme?: Theme}) => css`
  background: ${theme?.colors?.primaryColor};
  padding: ${theme?.sizes?.grid * 2}px;
  width: 100%;
  flex-shrink: 0;
  margin: 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 2px 2px;
  position: relative;
`);
