import { SET_BRIGHTNESS } from "../actions/globalVariables.actions";

const initialState = {};

export default function globalVariablesReducer(state = initialState, action) {
	switch (action.type) {
		case SET_BRIGHTNESS:
			return { brightness: action.payload };

		default:
			return state;
	}
}
