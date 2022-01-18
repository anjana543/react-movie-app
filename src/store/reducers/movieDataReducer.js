import { MOVIEDATA } from "../actions/actionTypes";

const initialState = [];

const imagesListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIEDATA.UPDATE:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default imagesListReducer;
