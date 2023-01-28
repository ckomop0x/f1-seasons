import { API_ENDPOINT } from '../config';

export default async function getSeasons(year: number): Promise<any> {
  const seasonsData = await fetch(`${API_ENDPOINT}${year}.json`);
  return seasonsData.json();
}
