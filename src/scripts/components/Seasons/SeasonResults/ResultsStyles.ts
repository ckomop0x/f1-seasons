import styled from 'styled-components';

interface StandingsTableRawTypes {
    position: string;
}

interface FavoriteButtonTypes {
    isDriverFavorite: boolean;
}

export const Standings = styled.div`
    overflow: hidden;
    width: 100%;
    
    h2 {
      font-family: ${({theme}) => theme.secondaryFont};
      text-align: center;
      font-size: 1.5rem;
    }
`;

export const StandingsTable = styled.div`
    overflow-y: scroll;
    max-width: ${({theme}) => theme.grid * 120}px;
    margin: auto;
    
    table {
        text-align: left;
        width: 100%;
        margin-bottom: ${({theme}) => theme.grid * 6}px;
        border: 1px solid ${({theme}) => theme.gray1};
        border-spacing: 0;
        border-collapse: collapse;
    
        th {
            font-family: ${({theme}) => theme.secondaryFont};
            background: ${({theme}) => theme.gray1};
            padding:  ${({theme}) => theme.grid * 2}px;
            font-size: 1rem;
            color: white;
        }
        
        th:nth-child(1),
        th:nth-child(2),
        th:nth-child(4),
        th:nth-child(5) {
            width: ${({theme}) => theme.grid * 5}px;
        }
  }    
    
`;

export const StandingsTableRow = styled<StandingsTableRawTypes, 'tr'>('tr')`
    background: ${({position}) => position === '1' ? 'rgba(255,255,0,0.4);' : ''};

    :hover {
        cursor: pointer;
        background: rgba(255, 255, 0, 0.2);
    }
    
    td {
       padding: ${({theme}) => theme.grid}px;
       border-bottom: 1px solid ${({theme}) => theme.gray1};
       
       :nth-child(1),
       :nth-child(2),
       :nth-child(4),
       :nth-child(5) {
          text-align: center;
       }
    }
`;

export const FavoriteButton = styled<FavoriteButtonTypes, 'button'>('button')`
    background: url(${({isDriverFavorite}) => isDriverFavorite
    ? require('../../../../icons/star-solid.svg')
    : require('../../../../icons/star-regular.svg')});
    border: none;
    background-size: 100%;
    background-repeat: no-repeat;
    width: ${({theme}) => theme.grid * 3}px;
    height: ${({theme}) => theme.grid * 3}px;
`;

export const BackButton = styled.button`
    display: block;
    margin: auto;
    border: none;
    background: none;
    cursor: pointer;
    color: ${({theme}) => theme.primaryRed};
    
    :hover {
        text-decoration: underline;
    }
`;