import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Desktop from "../desktop";

const index = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" exact element={<Desktop />} />
				</Routes>
			</Router>
		</div>
	);
};

export default index;
