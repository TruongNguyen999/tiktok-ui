/** LIBRARY */
import { combineReducers } from "redux";

// REDUCERS
import user from "./user/reducers";
import videos from "./video/reducers";
import error from "./error/reducers";

const reducers = combineReducers({
  user,
  videos,
  error,
});

export default reducers;
