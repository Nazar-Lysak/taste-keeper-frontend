import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserAuthState {
  isLoggedIn: boolean;
}

const initialState: UserAuthState = {
  isLoggedIn: false,
};

const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = userAuth.actions;

export default userAuth.reducer;