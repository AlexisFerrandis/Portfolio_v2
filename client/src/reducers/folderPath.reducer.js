import { FOLDER_PATH } from "../actions/folderPath.actions";

const initialState = {};

export default function folderPathReducer(state = initialState, action) {
	switch (action.type) {
		case FOLDER_PATH:
			return { ...state, path: action.payload };

		default:
			return state;
	}
}
