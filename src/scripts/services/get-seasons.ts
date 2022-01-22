import * as fetchImport from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

export default async function getSeasons(year: number): Promise<any> {
  const seasonsData = await fetch(`${API_ENDPOINT}${year}.json`);
  return seasonsData.json();
}
