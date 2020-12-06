import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'light',
} as const;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.name = action.payload.name;
    },
  },
});

// Selectors
export const getTheme = (state) => state.theme;

// Reducers and actions
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
