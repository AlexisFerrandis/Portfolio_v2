import { SET_ACTIVE_WINDOWS, SET_DESACTIVE_WINDOWS, IS_POKEMON_ACTIVE } from "../actions/activesWindows.actions";

const initialState = {};

export default function activesWindowsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ACTIVE_WINDOWS:
			return { ...state, [action.payload]: true };

		case SET_DESACTIVE_WINDOWS:
			return { ...state, [action.payload]: false };
		
		case IS_POKEMON_ACTIVE:
			return { ...state, isActive : action.payload};

		default:
			return state;
	}
}
