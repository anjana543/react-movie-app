import { SEARCH } from "../actions/actionTypes";

const initialState = {
  term: "",
};

const gridFilterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH.UPDATE:
      return { ...state, term: payload };
    default:
      return state;
  }
};

export default gridFilterReducer;
