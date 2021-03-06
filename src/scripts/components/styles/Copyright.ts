import styled from 'styled-components';

export const Copyright = styled.div`
  text-align: center;
  margin: 0;
  font-size: 0.8125rem;
  background: ${({ theme }) => theme.gray1};
  color: white;
  padding: ${({ theme }) => theme.grid}px;

  a {
    color: white;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;
