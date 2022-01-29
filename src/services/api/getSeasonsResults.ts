import axios from 'axios';
import { API_ENDPOINT } from 'utils/constants/API_ENDPOINT';

export default async function getSeasonsResults(
  season: string,
  round: string
): Promise<Record<any, unknown>> {
  return axios.get(`${API_ENDPOINT}${season}/${round}/results.json`);
}
