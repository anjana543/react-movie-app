import { combineReducers } from "redux";

import headerReducer from "./headerReducer";
import movieDataReducer from "./movieDataReducer";
import searchReducer from "./searchReducer";

/**
 * @description - Root reducer.
 */
const rootReducer = combineReducers({
  headerData: headerReducer,
  movieData: movieDataReducer,
  searchData: searchReducer,
});

export default rootReducer;
