import * as React from 'react';
import CardButton from '../../styles/CardButton';
import {Card} from './SeasonCardStyles';

export interface SeasonCardProps {
    raceName: string;
    circuitName: string;
    season: string;
    round: string;
    country: string;
    locality: string;
    circuitId: string;
    date: string;
    time: string;
    onSeasonSelect (): void;
}

const SeasonCard = (
    {raceName, circuitName, round, country, locality, date, onSeasonSelect}: SeasonCardProps
) => {
    return (
        <Card>
            <div className="title">Round: {round}</div>
            <div className="content">
                <h3>{circuitName}</h3>
                <h4>{locality}, {country}</h4>
                <div>Race – {raceName},</div>
                <div>Date – {date}</div>
                <CardButton
                    onClick={onSeasonSelect}
                    title="Read more on Wiki">
                    Go to season standings
                </CardButton>
            </div>
        </Card>
    );
};

export default SeasonCard;