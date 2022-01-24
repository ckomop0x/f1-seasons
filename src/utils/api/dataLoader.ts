import { API_ENDPOINT } from '../../config';
import axios from 'axios';

export default async function dataLoader(url: string) {
  try {
    const { status, data } = await axios.get(`${API_ENDPOINT}${url}.json`);

    if (status === 200) {
      return {
        status,
        data
      };
    }
  } catch (e: any) {
    console.log(e.message);
    return {
      error: 'Error while getting data',
      status
    };
  }
}
