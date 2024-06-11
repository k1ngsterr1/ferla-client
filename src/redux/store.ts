import { configureStore } from "@reduxjs/toolkit";
import idSlice from "./idSlice";

export const store = configureStore({
  reducer: {
    id: idSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
