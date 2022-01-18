import { HEADER } from "../actions/actionTypes";

const initialState = {
  title: "",
  isScroll: false,
};

const headerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HEADER.UPDATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default headerReducer;
