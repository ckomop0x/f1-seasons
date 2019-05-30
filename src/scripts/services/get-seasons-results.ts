import * as fetchImport from 'isomorphic-unfetch';
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

export default async function getSeasonsResults(season: string, round: string): Promise<any> {
    return fetch(`https://ergast.com/api/f1/${season}/${round}/results.json`);
}
