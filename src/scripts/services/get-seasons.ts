import axios from 'axios';

export default function getSeasons (year: number) {
    return axios.get(`https://ergast.com/api/f1/${year}.json`);
}