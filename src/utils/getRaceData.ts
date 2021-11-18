import * as fetchImport from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../config';
const fetch = fetchImport.default || fetchImport;

export default async function getRaceData(season: string, round: string): Promise<any> {
  const response = await fetch(`${API_ENDPOINT}${season}/${round}/results.json`);
  const raceData = await response.json();
  console.log(raceData);
  return await raceData;
}
