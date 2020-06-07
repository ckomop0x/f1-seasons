import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.grid * 2}px;
  background: white;
  color: ${({ theme }) => theme.gray1};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);

  @media (min-width: 600px) {
    margin: 8px;
    width: 47%;
  }

  @media (min-width: 900px) {
    width: 31%;
  }

  @media (min-width: 1200px) {
    width: 22%;
  }

  @media (min-width: 1500px) {
    width: 18%;
  }

  .content {
    padding: ${({ theme }) => theme.grid * 2.5}px;
    background: ${({ theme }) => theme.gray2};
  }

  h4 {
    text-align: center;
  }
`;
