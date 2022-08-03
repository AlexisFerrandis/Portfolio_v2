export const SET_ACTIVE_WINDOWS = "SET_ACTIVE_WINDOW";

export const setAtiveWindows = (window) => {
	return (dispatch) => {
		if (window === undefined) window = "app";
		dispatch({ type: SET_ACTIVE_WINDOWS, payload: window });
	};
};
