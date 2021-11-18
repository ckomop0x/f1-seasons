import styled from 'styled-components';

export const SeasonsWrapper = styled.div`
  background: white;
  color: ${({ theme }) => theme.gray1};
  overflow-x: auto;
  overflow-y: auto;
  flex: 1 auto;
  padding: ${({ theme }) => theme.grid * 2}px;
`;

export const SeasonStyled = styled.div`
  padding-top: ${({ theme }) => theme.grid * 2}px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
