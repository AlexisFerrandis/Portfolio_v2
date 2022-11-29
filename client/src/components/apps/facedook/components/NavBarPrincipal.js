import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UIdContext } from "./AppContext";
import { useDispatch } from "react-redux";

// img
import fdLogo from "../assets/logo/letter-logo.png"
import glassIco from "../assets/picto/magnifying-glass-solid.svg"
import houseSolid from "../assets/picto/house-solid.svg"
import groupIco from "../assets/picto/user-group-solid.svg"
import movieIco from "../assets/picto/photo-film-solid.svg"
import listUl from "../assets/picto/list-ul-solid.svg"
import messenger from "../assets/picto/facebook-messenger-brands.svg"
import bellSolid from "../assets/picto/bell-solid.svg"

const NavBarPrincipal = () => {
	const dispatch = useDispatch();
	const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);

	const activePage = useSelector((state) => state.pageReducer.page);

	const displayHomePage = () => {
		dispatch({ type: "ACTIVE_PAGE", payload: "homePage" });
	}
	const displayFriendsPage = () => {
		dispatch({ type: "ACTIVE_PAGE", payload: "friendsPage" });
	}
	const displayWatchPage = () => {
		dispatch({ type: "ACTIVE_PAGE", payload: "watchPage" });
	}
	const displayProfilPage = () => {
		dispatch({ type: "ACTIVE_PAGE", payload: "profilPage" });
	}

	return (
		<header className="header">
			<nav className="principal-nav">
				<div className="principal-nav-container">
					<div className="left-part">
						<div className="logo">
							<div className="logo" onClick={displayHomePage}>
								<img src={fdLogo} alt="home" />
							</div>
						</div>
						{uid ? (
							<div className="search-on principal-navbar-ico">
								<img src={glassIco} alt="search" />
							</div>
						) : (
							<li></li>
						)}
					</div>
					<div className="mid-part">
						<ul className="mid-part-all">
							<li className="thread" onClick={displayHomePage}>
								<div className={activePage === "homePage" ? "is-active" : ""}>
									<div className="principal-navbar-ico ">
										<img src={houseSolid} alt="home" />
									</div>
								</div>
							</li>
							{uid ? (
								<li className="todo" onClick={displayFriendsPage}>
									<div className={activePage === "friendsPage" ? "is-active" : ""}>
										<div className="principal-navbar-ico">
											<img src={groupIco} alt="friends" />
										</div>
									</div>
								</li>
							) : (
								<li></li>
							)}
							{/* <li className="principal-navbar-ico">
								<NavLink to="/pages">
									<img src="./assets/picto/flag-solid.svg" alt="home" />
								</NavLink>
							</li> */}
							{uid ? (
								<li className="watch" onClick={displayWatchPage}>
									<div className={activePage === "watchPage" ? "is-active" : ""}>
										<div className="principal-navbar-ico">
											<img src={movieIco} alt="watch" />
										</div>
									</div>
								</li>
							) : (
								<li></li>
							)}
							{/* <li className="principal-navbar-ico">
								<NavLink to="/group">
									<img src="./assets/picto/users-line-solid.svg" alt="home" />
								</NavLink>
							</li> */}
						</ul>
					</div>
					{uid ? (
						<div className="right-part">
							<ul className="right-part-list">
								<li className="options-navbar-ico">
									<img className="ico" src={listUl} alt="settings" />
								</li>
								<li className="options-navbar-ico">
									<img className="ico" src={messenger} alt="messenger" />
								</li>
								<li className="options-navbar-ico">
									<img className="ico" src={bellSolid} alt="notifications" />
								</li>
								<div onClick={displayProfilPage}>
									<li className="profil-pic-container">
										<img className="profil-pic" crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + userData.picture} alt="profil-pic"  />
									</li>
								</div>
								{/* <Logout /> */}
							</ul>
						</div>
					) : (
						<li></li>
					)}
				</div>
			</nav>
		</header>
	);
};

export default NavBarPrincipal;
