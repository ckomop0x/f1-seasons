import * as fetchImport from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../config';
import { APIData, Race } from '../types';
const fetch = fetchImport.default || fetchImport;

export default async function getSeasonData(year: number): Promise<Race[]> {
  const response = await fetch(`${API_ENDPOINT}${year}.json`);
  const responseData: APIData = await response.json();
  return responseData.MRData.RaceTable.Races;
}
