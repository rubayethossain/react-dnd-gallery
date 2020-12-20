import { combineReducers } from "redux";
import counterReducer from "./Counter/counter.reducer";
import mediaReducer from "./Media/media.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  media: mediaReducer,
});

export default rootReducer;
