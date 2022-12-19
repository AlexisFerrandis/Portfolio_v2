export const SET_ACTIVE_WINDOWS = "SET_ACTIVE_WINDOW";
export const SET_DESACTIVE_WINDOWS = "SET_DESACTIVE_WINDOW";
export const IS_POKEMON_ACTIVE = "IS_POKEMON_ACTIVE";

export const setAtiveWindows = (window) => {
	return (dispatch) => {
		if (window === undefined) window = "helloWorld";
		dispatch({ type: SET_ACTIVE_WINDOWS, payload: window });
	};
};

export const setDesactiveWindows = (window) => {
	return (dispatch) => {
		dispatch({ type: SET_DESACTIVE_WINDOWS, payload: window });
	};
};

export const isPokemonActive = (bool) => {
	return (dispatch) => {
		dispatch({ type: IS_POKEMON_ACTIVE, payload: bool });
	};
};