import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
import * as coursesApi from "../api/courseApi";
import { beginApiCall, apiCallSuccess } from "./apiStatus";

const slice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    erorr: null,
  },
  reducers: {
    courseAdded: (state, action) => {
      state.courses.push(action.payload);
    },
    coursesReceived: (state, action) => {
      state.courses = action.payload.data;
    },
    courseUpdated: (state, action) => {
      const index = state.courses.findIndex((c) => c.id === action.payload.id);
      state.courses[index] = action.payload;
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
export const { courseAdded, coursesReceived, courseUpdated, onError } =
  slice.actions;

export const getCourses = () => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const courses = await coursesApi.getCourses();
    dispatch(coursesReceived(courses));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  } finally {
    dispatch(apiCallSuccess());
  }
};

export const saveCourse = (course) => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const savedCourse = await coursesApi.saveCourse(course);
    course.id
      ? dispatch(courseUpdated(savedCourse.data))
      : dispatch(courseAdded(savedCourse.data));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  } finally {
    dispatch(apiCallSuccess());
  }
};

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
