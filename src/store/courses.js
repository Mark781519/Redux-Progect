import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {
    courseAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { courseAdded } = slice.actions;

/* 
  createSelector(
      selector1,
      selector2,
      selector3,
      (selector1, selector2, selector3) => 
  )
*/

export const reactCoursesSelector = createSelector(
  (state) => state.entities.courses,
  (courses) => courses.filter((c) => c.title.includes("React"))
);
