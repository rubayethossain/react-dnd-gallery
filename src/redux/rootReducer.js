import { combineReducers } from "redux";
import mediaReducer from "./Media/media.reducer";

const rootReducer = combineReducers({
  media: mediaReducer,
});

export default rootReducer;
