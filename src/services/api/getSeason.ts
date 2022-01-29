import dataLoader from 'utils/api/dataLoader';
import { SeasonInterface } from 'types/Season.interface';

export default async function getSeason(year: number) {
  const seasonData = await dataLoader(year.toString());
  if (seasonData?.status === 200) {
    return seasonData.data as SeasonInterface;
  }
  return seasonData?.error;
}
