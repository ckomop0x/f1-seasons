import * as fetchImport from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

export default async function getSeasonsResults(season: string, round: string): Promise<any> {
  const roundData = await fetch(`${API_ENDPOINT}${season}/${round}/results.json`);
  return roundData.json();
}
