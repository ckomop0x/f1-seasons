import styled from 'styled-components';
import { FlagWrapper } from '../Flag/Flag';

export const RaceItemWrapper = styled.article`
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.gray1};
  border-right: 1px solid ${({ theme }) => theme.gray1};
  border-left: 1px solid ${({ theme }) => theme.gray2};
  border-bottom: 1px solid ${({ theme }) => theme.gray2};
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: all 0.5s ease;
  width: 98%;
  margin: 1%;
  position: relative;

  @media (min-width: 700px) {
    width: 48%;
    margin: 1%;
  }

  h2 {
    font-size: 20px;
  }

  :hover {
    border-color: #e10600;
  }

  a {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export const RaceItemHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.gray2};
  position: relative;
  margin: 0 16px 0 0;
  height: 50px;
`;

export const RoundNumber = styled.div`
  color: #e10600;
  text-transform: uppercase;
  display: block;
  padding: 8px 16px;
  background: white;
  position: absolute;
  top: -52px;
  left: -18px;
  font-size: 18px;
`;

export const DateLine = styled.div`
  height: 40px;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${FlagWrapper} {
    border: 1px solid ${({ theme }) => theme.gray2};
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

export const RaceDate = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
`;
