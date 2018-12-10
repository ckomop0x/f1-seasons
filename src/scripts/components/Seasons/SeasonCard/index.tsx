import * as React from 'react';
import Flag from '../../Flag/index';
import CardButton from '../../styles/CardButton';
import {CardTitle} from '../../styles/CardTitle';
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
    onSeasonSelect(): void;
}

const SeasonCard = ({raceName, circuitName, round, country, locality, date, onSeasonSelect}: SeasonCardProps) => {
    return (
        <Card title={circuitName}>
            <CardTitle>{circuitName}</CardTitle>
            <div className="content">
                <Flag country={country} />
                <h4>
                    {locality}, {country}
                </h4>
                <div>
                    <b>Round:</b> {round}
                </div>
                <div>
                    <b>Race:</b> {raceName}
                </div>
                <div>
                    <b>Date:</b> {date}
                </div>
            </div>
            <CardButton onClick={onSeasonSelect} title="Go to standings">
                Go to standings &rarr;
            </CardButton>
        </Card>
    );
};

export default SeasonCard;
