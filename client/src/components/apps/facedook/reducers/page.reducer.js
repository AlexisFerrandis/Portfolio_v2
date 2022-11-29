import { ACTIVE_PAGE, ACTIVE_USER_PROFIL } from "../actions/page.actions";

const initialState = {};

export default function pageReducer(state = initialState, action) {
	switch (action.type) {
		case ACTIVE_PAGE:
			return { ...state, page: action.payload };
		
		case ACTIVE_USER_PROFIL:
			return { ...state, id: action.payload };

		default:
			return state;
	}
}
