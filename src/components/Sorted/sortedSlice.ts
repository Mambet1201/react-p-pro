import { createSlice } from "@reduxjs/toolkit";

interface SortedSlice {
  categoryId: number;
  sort: sortedListEl;
}

interface sortedListEl {
  name: string;
  title: string;
}

const initialState: SortedSlice = {
  categoryId: 0,
  sort: { name: "rating", title: "По рейтенгу" },
};

export const sortedSlice = createSlice({
  name: "sort",
  initialState,

  reducers: {
    changeCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});
export const { changeCategory, changeSort } = sortedSlice.actions;
export default sortedSlice.reducer;
