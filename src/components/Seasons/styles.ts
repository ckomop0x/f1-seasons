import styled from 'styled-components';

export const MainContainer = styled.div`
  background: white;
  color: ${({ theme }) => theme.gray1};
  overflow-x: auto;
  overflow-y: auto;
  flex: 1 auto;
  padding: ${({ theme }) => theme.grid * 2}px;
`;

export const SelectedSeason = styled.h1`
  display: block;
  max-width: ${({ theme }) => theme.grid * 50}px;
  text-align: center;
  margin: 1rem auto;
  color: white;
  background: ${({ theme }) => theme.primaryRed};
  padding: 0.5rem;
  transform: skew(-7deg);
  text-transform: uppercase;
`;

export const YearsSelectWrapper = styled.div`
  select {
    display: block;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: ${({ theme }) => theme.primaryRed};
    background-image: none;
  }

  .select {
    position: relative;
    width: ${({ theme }) => theme.grid * 20}px;
    height: 3em;
    line-height: 3;
    background: ${({ theme }) => theme.primaryRed};
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
    background: ${({ theme }) => theme.primaryRed};
    pointer-events: none;
  }

  .select:hover::after {
    color: #f39c12;
  }

  .select::after {
    transition: 0.25s all ease;
  }
`;

export const SeasonStyled = styled.div`
  padding-top: ${({ theme }) => theme.grid * 2}px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
