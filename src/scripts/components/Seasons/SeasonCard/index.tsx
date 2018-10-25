import * as React from 'react';
import {seasonCard, seasonCardButton, seasonCardRound, seasonCardContent} from './season-card.css';

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
        <div className={seasonCard}>
            <div className={seasonCardRound}>Round: {round}</div>
            <div className={seasonCardContent}>
                <h3>{circuitName}</h3>
                <h4>{locality}, {country}</h4>
                <div>Race – {raceName},</div>
                <div>Date – {date}</div>
                <button
                    className={seasonCardButton}
                    onClick={onSeasonSelect}
                    title="Read more on Wiki">
                    Go to season standings
                </button>
            </div>
        </div>
    );
};

export default SeasonCard;