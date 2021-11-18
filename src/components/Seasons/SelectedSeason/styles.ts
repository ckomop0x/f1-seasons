import styled from 'styled-components';

export const SelectedSeasonWrapper = styled.div`
  max-width: ${({ theme }) => theme.grid * 50}px;
  text-align: center;
  margin: 1rem auto;
  color: white;
  background: ${({ theme }) => theme.primaryRed};
  padding: 0.5rem;
  transform: skew(-7deg);
  text-transform: uppercase;
`;

export const SelectedSeasonTitle = styled.h1``;
