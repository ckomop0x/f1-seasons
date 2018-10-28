import styled from 'styled-components';

interface StandingsTableRawTypes {
    position: string;
}

interface FavoriteButtonTypes {
    isDriverFavorite: boolean;
}

export const Standings = styled.div`
    width: 100%;
    overflow-x: scroll;
    overflow: hidden;
    min-width: 420px;
`;

export const StandingsTable = styled.table`
    width: 100%;
    text-align: left;
`;

export const StandingsTableRow = styled<StandingsTableRawTypes, 'tr'>('tr')`
    background: ${({position}) => position === '1' ? 'rgba(255, 255, 0, 0.31)' : ''};    

    :hover {
        cursor: pointer;
        background: rgba(255, 255, 0, 0.31);
    }
    
    td {
       padding: 8px;
    }
`;

export const FavoriteButton = styled<FavoriteButtonTypes, 'button'>('button')`
    background: url(${({isDriverFavorite}) => isDriverFavorite
        ? require('../../../../icons/star-solid.svg')
        : require('../../../../icons/star-regular.svg')});
    border: none;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
`;