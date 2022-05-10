import { combineReducers } from "redux";

import VoatersReducer from "./VoatersReducer";
import CandidatesReducer from "./CandidatesReducer";

export default combineReducers({
  VoatersReducer,
  CandidatesReducer,
});
