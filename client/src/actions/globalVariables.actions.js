export const SET_BRIGHTNESS = "SET_BRIGHTNESS";
export const SET_VOLUME = "SET_VOLUME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_DARK_MODE = "SET_DARK_MODE";

export const setBrightness = (num) => {
	return (dispatch) => {
		if (num === undefined) num = 85;
		dispatch({ type: SET_BRIGHTNESS, payload: num });
	};
};

export const setVolume = (num) => {
	return (dispatch) => {
		if (num === undefined) num = 45;
		dispatch({ type: SET_VOLUME, payload: num });
	};
};

export const setLanguage = (language) => {
	return (dispatch) => {
		if (language === undefined) language = "Fr";
		dispatch({ type: SET_LANGUAGE, payload: language });
	};
};

export const setDarkMode = (darkMode) => {
	return (dispatch) => {
		if (darkMode === undefined) darkMode = false;
		dispatch({ type: SET_DARK_MODE, payload: darkMode });
	};
};
