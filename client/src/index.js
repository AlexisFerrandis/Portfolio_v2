import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { setVolume, setBrightness, setLanguage, setDarkMode } from "./actions/globalVariables.actions";
import { setAtiveWindows, setDesactiveWindows } from "./actions/activesWindows.actions";
import { folderPath } from "./actions/folderPath.actions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(setVolume());
store.dispatch(setBrightness());
store.dispatch(setLanguage());
store.dispatch(setDarkMode());

store.dispatch(setAtiveWindows());
store.dispatch(setDesactiveWindows());

store.dispatch(folderPath());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
