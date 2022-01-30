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
  flex: 1;
`;

export const RoundTitle = styled.div`
  color: ${({ theme }) => theme.gray2};
`;

export const RoundNumber = styled.div`
  padding-left: 16px;
  color: ${({ theme }) => theme.gray2};
`;

export const CircuitName = styled.div`
  display: flex;
  flex-direction: column;
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

export const DetailsLink = styled.a`
  display: flex;
  align-self: center;
  margin-top: 16px;
  width: 100%;
  border: 0;
  padding: 16px;
  color: ${({ theme }) => theme.primaryRed};
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

export const SeasonCardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.gray1};
  background-color: ${({ theme }) => theme.gray2};
  border-radius: 4px;
  min-height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.gray1};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (min-width: 750px) {
    align-items: center;
    min-height: 100px;
    flex-direction: row;

    ${Round} {
      //border: 1px solid ${({ theme }) => theme.gray1};
      width: 100px;
      height: 100%;
      padding: 0;
      flex-direction: column;
      justify-content: flex-start;
      align-self: flex-start;
      background: none;
      flex-grow: 0;
    }

    ${RoundTitle} {
      padding: 4px 16px;
      font-size: 16px;
      background-color: ${({ theme }) => theme.gray1};
    }

    ${RoundNumber} {
      color: ${({ theme }) => theme.gray1};
      font-size: 40px;
      padding: 0 8px;
    }

    ${CountryDetails} {
      padding-top: 0;
      height: 100%;
    }

    ${FlagWrapper} {
      width: 72px;
      height: 100%;
      display: flex;
      padding-top: 0;
      padding-right: 0;
      padding-left: 8px;
      border-radius: 0;
      align-self: center;

      img {
        width: 72px;
        border-radius: 0;
      }
    }

    ${CircuitName} {
      min-width: 220px;
      margin-left: 20px;
      padding: 8px;
      align-self: flex-start;
    }

    ${RaceName} {
      flex-direction: column;
      height: 100%;
      padding: 8px 4px;
      font-size: 16px;
      b {
        font-size: 18px;
        text-align: center;
        border-bottom: 1px solid ${({ theme }) => theme.primaryGray50};
        margin-bottom: 8px;
      }
    }

    ${DetailsLink} {
      height: 100%;
      margin-top: 0;
      flex: 1;
    }
  }
`;
