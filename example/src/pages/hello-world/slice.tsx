import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'src/common/store';

export interface SliceState {
  json: Record<string, any>;
  loading: boolean;
}

export const getRequest = createAsyncThunk<
  void,
  void,
  {
    state: ReturnType<typeof store.getState>;
  }
>('getRequest', async (template, { dispatch }) => {
  const request = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
    res.json(),
  );
  dispatch(setJSON(request));
});

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
  extraReducers: (builder) => {
    builder
      .addCase(getRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRequest.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getRequest.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setJSON } = slice.actions;
export default slice.reducer;
