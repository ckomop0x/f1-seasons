import dataLoader from 'utils/api/dataLoader';

export default async function getSeasons() {
  const seasonData = await dataLoader('seasons', {
    limit: 100
  });
  if (seasonData?.status === 200) {
    return seasonData.data.MRData.SeasonTable.Seasons.map(
      (season: { season: string; url: string }) => season.season
    ).reverse();
  }
  return seasonData?.error;
}
