import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      __disableNotification?: boolean;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, __disableNotification }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      if (__disableNotification) {
        alert(error.response?.data?.message ?? 'Operation failed.');
      }

      return {
        error: { status: error.response?.status, data: error.response?.data },
      };
    }
  };

export const helloWorldAPI = createApi({
  reducerPath: 'helloWorldAPI',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://httpstat.us',
  }),
  endpoints: (build) => ({
    getASuccessAPI: build.query<{ code: number; description: string }, void>({
      query: () => ({
        url: '/200',
      }),
    }),
    getAFailedAPI: build.query<
      { code: number; description: string },
      { __disableNotification?: boolean }
    >({
      query: () => ({
        url: '/400',
      }),
    }),
  }),
});

export interface SliceState {
  json: Record<string, any>;
  loading: boolean;
}

export const slice = createSlice({
  name: 'helloWorld',
  initialState: {
    json: {},
    loading: false,
  } as SliceState,
  reducers: {
    setJSON: (state, action: PayloadAction<Record<string, any>>) => {
      state.json = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setJSON } = slice.actions;
export default slice.reducer;
