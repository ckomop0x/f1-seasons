import axios from 'axios';
import { API_ENDPOINT } from 'utils/constants/API_ENDPOINT';

export default async function dataLoader(
  url: string,
  params?: {
    [key: string]: string | number;
  }
) {
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
