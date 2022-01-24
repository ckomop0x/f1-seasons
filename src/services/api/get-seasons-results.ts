import { API_ENDPOINT } from '../../config';
import axios from 'axios';

export default async function getSeasonsResults(season: string, round: string) {
  const roundData = await axios.get(`${API_ENDPOINT}${season}/${round}/results.json`);
  return roundData;
}
