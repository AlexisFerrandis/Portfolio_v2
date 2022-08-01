export const GET_ACTIVES_WINDOWS = "GET_ACTIVES_WINDOWS";
export const SET_ACTIVE_WINDOW = "SET_ACTIVE_WINDOW";

export const getActivesWindows = () => {
	return (dispatch) => {
		let windows = [];
		dispatch({ type: GET_ACTIVES_WINDOWS, payload: windows });
	};
};

export const setAtiveWindow = (window) => {
	return (dispatch) => {
		dispatch({ type: SET_ACTIVE_WINDOW, payload: window });
	};
};
