import styled from 'styled-components';

export const SeasonStyled = styled.div`
  padding-top: ${({ theme }) => theme.grid * 2}px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
