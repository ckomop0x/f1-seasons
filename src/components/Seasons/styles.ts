import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme } from '../../theme/theme';

export const MainContainer = styled.div(
  ({ theme }: { theme: Theme }) => css`
    background: white;
    color: ${theme.colors.gray1};
    overflow-x: auto;
    overflow-y: auto;
    flex: 1 auto;
    padding: ${theme.sizes.grid * 2}px;
  `,
);

export const SelectedSeason = styled.h1(
  ({ theme }) => css`
    display: block;
    max-width: ${theme.sizes.grid * 50}px;
    text-align: center;
    margin: 1rem auto;
    color: white;
    background: ${theme.colors.primaryColor};
    padding: 0.5rem;
    transform: skew(-7deg);
    text-transform: uppercase;
  `,
);

export const YearsSelectWrapper = styled.div(
  ({ theme }: { theme: Theme }) => css`
    select {
      display: block;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0 !important;
      background: ${theme.colors.primaryColor};
      background-image: none;
    }

    .select {
      position: relative;
      width: ${theme.sizes.grid * 20}px;
      height: 3em;
      line-height: 3;
      background: ${theme.colors.primaryColor};
      overflow: hidden;
      border-radius: 0.25em;
      text-align: center;
      display: block;
      margin: 1rem auto;
      align-self: center;
    }

    select {
      width: 100%;
      height: 100%;
      font-size: 1.25rem;
      margin: 0;
      padding: 0 0 0 0.5em;
      color: #fff;
      cursor: pointer;
    }

    select::-ms-expand {
      display: none;
    }

    .select::after {
      color: white;
      content: '\\25BC';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 0 1em;
      background: ${theme.colors.primaryColor};
      pointer-events: none;
    }

    .select:hover::after {
      color: #f39c12;
    }

    .select::after {
      transition: 0.25s all ease;
    }
  `,
);

export const SeasonStyled = styled.div(
  ({ theme }: { theme: Theme }) => css`
    padding-top: ${theme.sizes.grid * 2}px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  `,
);
