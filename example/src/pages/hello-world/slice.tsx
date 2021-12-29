import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SliceState {
  record: Record<string, any>;
}

export const slice = createSlice({
  name: 'helloWorld',
  initialState: {
    record: {},
  } as SliceState,
  reducers: {
    setRecord: (state, action: PayloadAction<SliceState['record']>) => {
      state.record = action.payload;
    },
  },
});

export const { setRecord } = slice.actions;
export default slice.reducer;
