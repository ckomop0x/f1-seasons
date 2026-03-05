'use client';
import { use } from 'react';
import Seasons from 'components/Seasons/Seasons';

interface SeasonPageProps {
  params: Promise<{
    season?: string;
  }>;
}

const SeasonPage = ({ params }: SeasonPageProps) => {
  const { season } = use(params);

  return <Seasons season={season} />;
};

export default SeasonPage;
