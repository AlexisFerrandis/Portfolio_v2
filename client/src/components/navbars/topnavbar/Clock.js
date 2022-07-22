import React, { useEffect, useState } from "react";

const Clock = () => {
	const [dateTodisplay, setDateTodisplay] = useState();

	useEffect(() => {
		setInterval(() => {
			let options = { hour: "2-digit", minute: "2-digit", month: "short", day: "numeric", weekday: "short" };
			let timeStamp = new Date();
			let date = new Date(timeStamp).toLocaleDateString("fr-FR", options).replace(/[,]/g, " - ");
			setDateTodisplay(date);
		}, 1000);
	});

	return <div>{dateTodisplay}</div>;
};

export default Clock;
