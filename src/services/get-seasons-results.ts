import { API_ENDPOINT } from '../config';

export default async function getSeasonsResults(
  season: string,
  round: string,
): Promise<any> {
  const roundData = await fetch(
    `${API_ENDPOINT}${season}/${round}/results.json`,
  );

  return roundData.json();
}
