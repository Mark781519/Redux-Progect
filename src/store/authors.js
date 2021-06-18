import { createSlice } from "@reduxjs/toolkit";
import * as authorApi from "../api/authorApi";
import { beginApiCall, apiCallSuccess } from "./apiStatus";

const slice = createSlice({
  name: "authors",
  initialState: {
    authors: [],
    authorErorr: null,
  },
  reducers: {
    authorsReceived: (state, action) => {
      state.authors = action.payload.data;
    },
    onError: (state, action) => {
      state.authorErorr = action.payload;
    },
  },
});

export default slice.reducer;
export const { authorsReceived, onError } = slice.actions;

export const getAuthors = () => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const authors = await authorApi.getAuthors();
    dispatch(authorsReceived(authors));
  } catch (err) {
    dispatch(onError(err));
    throw err;
  } finally {
    dispatch(apiCallSuccess());
  }
};
