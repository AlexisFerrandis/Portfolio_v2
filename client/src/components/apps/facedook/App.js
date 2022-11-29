import { useEffect, useState } from "react";
import { UIdContext } from "./components/AppContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/user.actions";


import FullLogPage from "./components/Log/FullLogPage";
import Home from "./pages/Home"
import Friends from "./pages/Friends"
import Watch from "./pages/Watch"
import Profil from "./pages/Profil"
import UsersProfil from "./pages/UsersProfil";

const App = () => {
	const [uid, setUId] = useState(null);
	const dispatch = useDispatch();
	const activePage = useSelector((state) => state.pageReducer.page);

	useEffect(() => {
		const fetchToken = async () => {
			await axios({
				method: "get",
				url: `${process.env.REACT_APP_API_URL}jwtid`,
				withCredentials: "true",
			})
				.then((res) => {
					setUId(res.data);
				})
				.catch((err) => console.log(err + " : no token"));
		};
		fetchToken();

		uid ? dispatch({ type: "ACTIVE_PAGE", payload: "homePage" }) : dispatch({ type: "ACTIVE_PAGE", payload: "fullLogPage" });

		if (uid) dispatch(getUser(uid));
	}, [uid, dispatch]);

	return (
		<UIdContext.Provider value={uid}>
			{activePage === "fullLogPage" && <FullLogPage setUId={setUId}/>}

			{activePage === "homePage" && <Home />}
			{activePage === "friendsPage" && <Friends />}
			{activePage === "watchPage" && <Watch />}

			{activePage === "profilPage" && <Profil />}

			{activePage === "usersProfilPage" && <UsersProfil />}
		</UIdContext.Provider>
	);
};

export default App;
