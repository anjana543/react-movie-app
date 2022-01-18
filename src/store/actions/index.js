import { HEADER, MOVIEDATA, SEARCH } from "./actionTypes";

export const updateHeader = (payload) => {
  return { type: HEADER.UPDATE, payload };
};

export const updateMovieData = (payload) => {
  return { type: MOVIEDATA.UPDATE, payload };
};

export const updateSearch = (payload) => {
  return { type: SEARCH.UPDATE, payload };
};
