import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: number,
  username: string,
}

const initialState = {
  id: 1,
  username: 'benja',
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    resetUser: (state: Draft<typeof initialState>) => {
      state.id = null;
      state.username = null;
    },
  },
});

// Selectors
export const getUser = (state) => state.user;

// Reducers and actions
export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
