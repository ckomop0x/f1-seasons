import Races from 'components/Races';
import Seasons from 'components/Seasons/Seasons';

interface SeasonPageProps {
  params: {
    season?: string;
  };
}

const SeasonPage = ({ params }: SeasonPageProps) => (
  <Seasons season={params.season} />
);

export default SeasonPage;
