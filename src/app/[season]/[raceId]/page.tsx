'use client';
import { RaceDetails } from 'components/RaceDetails';

interface RaceDetailsPageProps {
  params: {
    season?: string;
    raceId?: string;
  };
}

const RaceDetailsPage = ({ params }: RaceDetailsPageProps) => (
  <RaceDetails season={params.season} raceId={params.raceId} />
);

export default RaceDetailsPage;
