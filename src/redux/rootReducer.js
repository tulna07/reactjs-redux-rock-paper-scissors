import { combineReducers } from "redux";
import rpsReducer from "./rpsReducer";

const rootReducer = combineReducers({rpsReducer});

export default rootReducer;