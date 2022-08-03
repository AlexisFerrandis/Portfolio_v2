import { SET_ACTIVE_WINDOWS } from "../actions/activesWindows.actions";

const initialState = {};

export default function activesWindowsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ACTIVE_WINDOWS:
			return { ...state, [action.payload]: true };

		default:
			return state;
	}
}
