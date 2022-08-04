import { combineReducers } from "redux";
import globalVariablesReducer from "./globalVariables.reducer";
import activesWindowsReducer from "./activesWindows.reducer";
import folderPathReducer from "./folderPath.reducer";

export default combineReducers({
	globalVariablesReducer,
	activesWindowsReducer,
	folderPathReducer,
});
