import { GET_ACTIVES_WINDOWS, SET_ACTIVE_WINDOW } from "../actions/activesWindows.actions";

const initialState = {};

export default function activesWindowsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ACTIVES_WINDOWS:
			return { ...state, windows: action.payload };

		case SET_ACTIVE_WINDOW:
			return { ...state, windows: [action.payload] };

		default:
			return state;
	}
}
