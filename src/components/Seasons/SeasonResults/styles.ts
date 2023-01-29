import styled from '@emotion/styled';
import Link from 'next/link';

interface StandingsTableRawTypes {
  position: any;
}

interface FavoriteButtonTypes {
  isDriverFavorite: boolean;
}

export const StandingsStyled = styled.div`
  overflow: hidden;
  width: 100%;

  h2 {
    font-family: ${({ theme }) => theme.secondaryFont};
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const StandingsTable = styled.div`
  overflow-y: scroll;
  max-width: ${({ theme }) => theme.sizes.grid * 120}px;
  margin: auto;

  table {
    text-align: left;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.sizes.grid * 6}px;
    border: 1px solid ${({ theme }) => theme.gray1};
    border-spacing: 0;
    border-collapse: collapse;

    th {
      font-family: ${({ theme }) => theme.secondaryFont};
      background: ${({ theme }) => theme.gray1};
      padding: ${({ theme }) => theme.sizes.grid * 2}px;
      font-size: 1rem;
      color: white;
    }

    th:nth-of-type(1),
    th:nth-of-type(2),
    th:nth-of-type(4),
    th:nth-of-type(5) {
      width: ${({ theme }) => theme.sizes.grid * 5}px;
    }
  }
`;

export const StandingsTableRow = styled.tr`
  background: ${({ position }: StandingsTableRawTypes) =>
    position === '1' ? 'rgba(255,255,0,0.4);' : ''};

  :hover {
    cursor: pointer;
    background: rgba(255, 255, 0, 0.2);
  }

  td {
    padding: ${({ theme }) => theme.sizes.grid}px;
    border-bottom: 1px solid ${({ theme }) => theme.gray1};

    :nth-of-type(1),
    :nth-of-type(2),
    :nth-of-type(4),
    :nth-of-type(5) {
      text-align: center;
    }
  }
`;

export const FavoriteButton = styled.button`
  border: none;
  width: ${({ theme }) => theme.sizes.grid * 3}px;
  height: ${({ theme }) => theme.sizes.grid * 3}px;
`;

export const BackButton = styled(Link)`
  display: block;
  margin: auto;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryColor};

  :hover {
    text-decoration: underline;
  }
`;
