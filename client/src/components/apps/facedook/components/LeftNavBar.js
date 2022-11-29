import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UIdContext } from "../components/AppContext";

// img 
import friends from "./../assets/picto/colored/friends.png"
import pages from "./../assets/picto/colored/pages.png"
import group from "./../assets/picto/colored/groupes.png"
import marketplace from "./../assets/picto/colored/marketplace.png"
import watch from "./../assets/picto/colored/watch.png"
import record from "./../assets/picto/colored/record.png"
import actuality from "./../assets/picto/colored/actualities.png"
import eventsPicto from "./../assets/picto/colored/events.png"

const LeftNavBar = () => {
	const dispatch = useDispatch();
	const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);

	const displayProfilPage = () => {
		dispatch({ type: "ACTIVE_PAGE", payload: "profilPage" });
	}
	const displayFriendsPage = () => {
		dispatch({ type: "ACTIVE_PAGE", payload: "friendsPage" });
	}
	const displayWatchPage = () => {
		dispatch({ type: "ACTIVE_PAGE", payload: "watchPage" });
	}

	return (
		<>
			{uid && (
				<div className="left-nav-container">
					<div className="left-nav-links">
						<ul>
							<li>
								<div onClick={displayProfilPage}>
									<div className="link-container">
										<img className="profil-pic" crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + userData.picture} alt="profil" />
										<h6>{userData.pseudo}</h6>
									</div>
								</div>
							</li>
							<li>
								<div onClick={displayFriendsPage}>
									<div className="link-container">
										<img src={friends} alt="friends" />
										<h6>Retrouver des amis</h6>
									</div>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src={pages} alt="pages" />
									<h6>Pages</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src={group} alt="groupes" />
									<h6>Groupes</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src={marketplace} alt="marketplace" />
									<h6>Marketplace</h6>
								</div>
							</li>
							<li>
								<div onClick={displayWatchPage}>
									<div className="link-container">
										<img src={watch} alt="watch" />
										<h6>Watch</h6>
									</div>
								</div>
							</li>
							{/* <li>
								<div className="link-container">
									<img src="../assets/picto/colored/memories.png" alt="memories" />
									<h6>Souvenirs</h6>
								</div>
							</li> */}
							<li>
								<div className="link-container">
									<img src={record} alt="records" />
									<h6>Enregistrements</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src={actuality} alt="actualities" />
									<h6>Actualités</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src={eventsPicto} alt="events" />
									<h6>Événements</h6>
								</div>
							</li>
							{/* <li>
								<div className="link-container">
									<img src="../assets/picto/colored/most-recent.png" alt="most-recent" />
									<h6>Plus récentes</h6>
								</div>
							</li> */}
							<div className="grey-separator"></div>
							<div className="legal-links">
								<p>Confidentialité</p>·<p>Conditions générales</p>·<p>Publicités</p>·<p>Choix publicitaires</p>·<p>Cookies</p>·<p>Plus</p>·<p>Mëta © 2022</p>
							</div>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default LeftNavBar;
