export const FOLDER_PATH = "FOLDER_PATH";

export const folderPath = (path) => {
	return (dispatch) => {
		if (path === undefined) path = "home";
		dispatch({ type: FOLDER_PATH, payload: path });
	};
};
