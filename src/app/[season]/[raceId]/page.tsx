'use client';
import { use } from 'react';
import { RaceDetails } from 'components/RaceDetails';

interface RaceDetailsPageProps {
  params: Promise<{
    season?: string;
    raceId?: string;
  }>;
}

const RaceDetailsPage = ({ params }: RaceDetailsPageProps) => {
  const { season, raceId } = use(params);

  return <RaceDetails season={season} raceId={raceId} />;
};

export default RaceDetailsPage;
