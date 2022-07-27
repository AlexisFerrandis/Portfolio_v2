import { SET_BRIGHTNESS, SET_VOLUME, SET_LANGUAGE } from "../actions/globalVariables.actions";

const initialState = {};

export default function globalVariablesReducer(state = initialState, action) {
	switch (action.type) {
		case SET_BRIGHTNESS:
			return { ...state, brightness: action.payload };

		case SET_VOLUME:
			return { ...state, volume: action.payload };

		case SET_LANGUAGE:
			return { ...state, language: action.payload };

		default:
			return state;
	}
}
