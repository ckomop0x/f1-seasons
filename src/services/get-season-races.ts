import { API_ENDPOINT } from '../config';

export default async function getSeasonRaces(
  year: number | string,
): Promise<any> {
  const racesData = await fetch(`${API_ENDPOINT}${year}.json`);
  return racesData.json();
}
