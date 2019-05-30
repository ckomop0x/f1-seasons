import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.primaryRed};
  padding: ${({ theme }) => theme.grid * 2}px;
  width: 100%;
  flex-shrink: 0;
  margin: 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 2px 2px;
  position: relative;
`;
