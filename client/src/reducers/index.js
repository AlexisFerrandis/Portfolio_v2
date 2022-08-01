import { combineReducers } from "redux";
import globalVariablesReducer from "./globalVariables.reducer";
import activesWindowsReducer from "./activesWindows.reducer";

export default combineReducers({
	globalVariablesReducer,
	activesWindowsReducer,
});
