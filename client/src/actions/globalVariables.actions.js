export const SET_BRIGHTNESS = "SET_BRIGHTNESS";

export const setBrightness = (num) => {
	return (dispatch) => {
		dispatch({ type: SET_BRIGHTNESS, payload: num });
	};
};
