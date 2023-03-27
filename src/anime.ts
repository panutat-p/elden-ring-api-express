import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export async function getAnime(): Promise<AxiosResponse> {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://animechan.vercel.app/api/random',
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (e: any) {
    throw e;
  }
}
