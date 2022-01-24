import dataLoader from 'utils/api/dataLoader';

export default async function getSeason(year: number) {
  const seasonData = await dataLoader(year.toString());
  if (seasonData?.status === 200) {
    return seasonData.data;
  }
  return seasonData?.error;
}
