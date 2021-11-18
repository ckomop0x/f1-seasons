import * as fetchImport from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../config';
import { APIData, Race } from '../components/Seasons/types';
const fetch = fetchImport.default || fetchImport;

export default async function getSeasons(year: number): Promise<Race[]> {
  const response = await fetch(`${API_ENDPOINT}${year}.json`);
  const responseData: APIData = await response.json();
  return responseData.MRData.RaceTable.Races;
}
