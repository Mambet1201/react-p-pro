import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "../src/components/Items/itemsSlice";
import sortedSlice from "../src/components/Sorted/sortedSlice";

export const store = configureStore({
  reducer: {
    items: itemsSlice,
    sorted: sortedSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
