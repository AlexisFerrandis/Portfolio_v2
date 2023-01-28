import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const SignInForm = ({setUId}) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();

		const emailError = document.querySelector(".email.error");
		const passwordError = document.querySelector(".password.error");

		axios({
			method: "post",
			url: `${process.env.REACT_APP_API_URL}api/user/login`,
			withCredentials: true,
			data: {
				email,
				password,
			},
		})
			.then((res) => {
				if (res.data.errors) {
					emailError.innerHTML = res.data.errors.email;
					passwordError.innerHTML = res.data.errors.password;
				} else {
					setUId(res.data.user)
					dispatch({ type: "ACTIVE_PAGE", payload: "homePage" });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<form action="" onSubmit={handleLogin} id="sign-in-form" className="sign-in-form">
				<h2>Se connecter à Facedook</h2>
				{/* <label htmlFor="email"></label> */}
				<input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Adresse e-mail / default@gmail.com" />
				<div className="email error"></div>
				{/* <label htmlFor="password"></label> */}
				<input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Mot de passe / default" />
				<div className="password error"></div>
				<input className="blue-btn" type="submit" value="Se connecter" />
				<p className="forgoted-password">Mot de passe oublié ?</p>
				<div className="grey-separator"></div>
			</form>
		</div>
	);
};

export default SignInForm;
