import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Desktop from "../desktop/Desktop";

const index = () => {
	return (
		<div>
			<Router>
				<Desktop />
				<Routes>{/* <Route path="/" exact element={} />  */}</Routes>
			</Router>
		</div>
	);
};

export default index;
