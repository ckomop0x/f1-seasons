import Races from 'components/Races';
import { NextPage } from 'next';

interface SeasonPageProps {
  params: {
    season?: string;
  };
}

const SeasonPage = ({ params }: SeasonPageProps) => (
  <Races season={params.season} />
);

export default SeasonPage;
