import { combineReducers } from "redux";
import dataReducer from "../reducers/dataReducer";
import postsReducer from "../reducers/postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  data: dataReducer,
});
