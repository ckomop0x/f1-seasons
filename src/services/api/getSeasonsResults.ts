import axios from 'axios';
import { API_ENDPOINT } from 'utils/constants/API_ENDPOINT';
// import { RaceSeasonInterface } from 'types/RaceSeason.interface';

export default async function getSeasonsResults(
  season: string,
  round: string
): Promise<unknown | undefined> {
  const { data } = await axios.get(`${API_ENDPOINT}${season}/${round}/results.json`);
  return data?.MRData;
}
