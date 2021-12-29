import axios, { AxiosError, AxiosResponse } from 'axios';
import i18next from 'i18next';

export const instance = axios.create({
  baseURL: 'https://httpstat.us',
});

function onAPIRejected(error: AxiosError) {
  console.error(error.response?.data?.description ?? `${i18next.t('Operation_Failed')}.`);
  return Promise.reject(error);
}

instance.interceptors.response.use((response: AxiosResponse) => response.data, onAPIRejected);
