import * as fetchImport from 'isomorphic-unfetch';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

export default async function getSeasons(year: number): Promise<any> {
  const seasonsData = await fetch(`https://ergast.com/api/f1/${year}.json`);
  return seasonsData.json();
}
