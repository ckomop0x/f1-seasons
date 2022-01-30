import styled from 'styled-components';

import { FlagWrapper } from 'components/Flag/FlagStyles';

export const Round = styled.div`
  background-color: ${({ theme }) => theme.gray1};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 20px;
`;

export const RoundTitle = styled.div`
  color: ${({ theme }) => theme.gray2};
`;

export const RoundNumber = styled.div`
  padding-left: 16px;
  color: ${({ theme }) => theme.gray2};
`;

export const CircuitName = styled.div`
  padding: 8px 0;
  h3 {
    margin: 0;
  }
  span {
    opacity: 0.8;
  }
`;

export const RaceName = styled.div`
  padding-left: 16px;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  b {
    width: 64px;
    padding-right: 20px;
  }
`;

export const DetailsButton = styled.button`
  margin-top: 16px;
  width: 100%;
  border: 0;
  padding: 16px;
  color: ${({ theme }) => theme.gray2};
  background-color: ${({ theme }) => theme.primaryRed};
`;

export const SeasonCardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.gray1};
  background-color: ${({ theme }) => theme.gray2};
  border-radius: 4px;
  width: 100%;
  color: ${({ theme }) => theme.gray1};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const CountryDetails = styled.div`
  padding: 4px 0 0 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${FlagWrapper} {
    padding-top: 6px;
    padding-right: 20px;
    border-radius: 0;

    img {
      width: 48px;
      border-radius: 0;
    }
  }
`;
