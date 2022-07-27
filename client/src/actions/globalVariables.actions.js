export const SET_BRIGHTNESS = "SET_BRIGHTNESS";
export const SET_VOLUME = "SET_VOLUME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setBrightness = (num) => {
	return (dispatch) => {
		if (num === undefined) num = 85;
		dispatch({ type: SET_BRIGHTNESS, payload: num });
	};
};

export const setVolume = (num) => {
	return (dispatch) => {
		if (num === undefined) num = 75;
		dispatch({ type: SET_VOLUME, payload: num });
	};
};

export const setLanguage = (language) => {
	return (dispatch) => {
		if (language === undefined) language = "Fr";
		dispatch({ type: SET_LANGUAGE, payload: language });
	};
};
