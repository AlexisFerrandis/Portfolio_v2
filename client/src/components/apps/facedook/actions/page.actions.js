export const ACTIVE_PAGE = "ACTIVE_PAGE";
export const ACTIVE_USER_PROFIL = "ACTIVE_USER_PROFIL";

export const activePage = (page) => {
	return (dispatch) => {
		if (page === undefined) page = "fullLogPage";
		dispatch({ type: ACTIVE_PAGE, payload: page });
	};
};

export const activeUserProfil = (id) => {
	return (dispatch) => {
		if (id === undefined) id = "0";
		dispatch({ type: ACTIVE_USER_PROFIL, payload: id });
	};
};