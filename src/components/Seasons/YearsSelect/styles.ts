import styled from 'styled-components';

export const SelectForm = styled.form`
  position: relative;
  width: 160px;
  background: ${({ theme }) => theme.primaryRed};
  border-radius: 0.25em;
  text-align: center;
  margin: 1rem auto;
  align-self: center;

  &::after {
    color: #f39c12;
    content: '\\25BC';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    background: ${({ theme }) => theme.primaryRed};
    pointer-events: none;
    transition: 0.25s all ease;
  }

  &:hover::after {
    color: darken(#f39c12, 20%);
  }
`;

export const SelectWrapper = styled.select`
  appearance: none;
  box-shadow: none;
  border: 0;
  background: ${({ theme }) => theme.primaryRed};
  width: 80px;
  font-size: 22px;
  margin: 0;
  padding: 0 0 0 0.5em;
  color: #fff;
  cursor: pointer;
`;
