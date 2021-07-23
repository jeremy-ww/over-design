import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from 'src/common/store';

export interface SliceState {
  text: string;
  loading: boolean;
}

export const getNewText = createAsyncThunk<
  string,
  void,
  {
    state: ReturnType<typeof store.getState>;
  }
>('getNewText', async (template, { dispatch }) => {
  // @ts-ignore
  await { then: (r) => setTimeout(r, 1000) };
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  dispatch(setText(`Random: ${Math.random()}`));
  return '2';
});

export const slice = createSlice({
  name: 'helloWorld',
  initialState: {
    text: '',
    loading: false,
  } as SliceState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewText.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewText.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getNewText.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setText } = slice.actions;
export default slice.reducer;
