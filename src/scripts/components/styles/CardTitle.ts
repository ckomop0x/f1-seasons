import styled from 'styled-components';

export interface CardTitleTypes {
    fontSize?: string;
}

export const CardTitle = styled<CardTitleTypes, 'h2'>('h2')`
    margin: 0;
    font-size: ${({fontSize}) => fontSize ? fontSize : '1.25rem'};
    padding: ${({theme}) => theme.grid * 2}px;
    text-align: center;
    font-family: ${({theme}) => theme.secondaryFont};
    background: ${({theme}) => theme.gray1};
    color: white;
    height: ${({theme}) => theme.grid * 10}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;