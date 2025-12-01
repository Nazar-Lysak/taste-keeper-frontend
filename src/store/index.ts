import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./userData/userAuthSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
