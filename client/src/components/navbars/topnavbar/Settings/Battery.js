import React, { useEffect, useState } from "react";

// img
import batteryCharging from "../../../../assets/navbars/topnavbar/battery-full-charging.svg";
import batteryFull from "../../../../assets/navbars/topnavbar/battery-full.svg";
import batteryGood from "../../../../assets/navbars/topnavbar/battery-good.svg";
import batteryLow from "../../../../assets/navbars/topnavbar/battery-low.svg";
import batteryEmpty from "../../../../assets/navbars/topnavbar/battery-empty.svg";

const Battery = ({ context }) => {
	const [batteryInformation, setBatteryInformation] = useState(navigator.getBattery());

	useEffect(() => {
		navigator.getBattery().then((battery) => {
			setBatteryInformation(battery);
		});
	});

	return (
		<div className="batterie-container">
			{batteryInformation.charging ? (
				<div className="settings-img">
					<img src={batteryCharging} alt="battery-charging" className={context === "details" ? "details" : ""} />
					{context === "details" ? <p>{batteryInformation.level * 100}%</p> : ""}
				</div>
			) : (
				<>
					{(batteryInformation.level === 1 || batteryInformation.level >= 0.9) && (
						<div className="settings-img">
							<img src={batteryFull} alt="battery-level" className={context === "details" ? "details" : ""} />
							{context === "details" ? <p>{batteryInformation.level * 100}%</p> : ""}
						</div>
					)}
					{batteryInformation.level < 0.9 && batteryInformation.level >= 0.5 && (
						<div className="settings-img">
							<img src={batteryGood} alt="battery-level" className={context === "details" ? "details" : ""} />
							{context === "details" ? <p>{batteryInformation.level * 100}%</p> : ""}
						</div>
					)}
					{batteryInformation.level < 0.5 && batteryInformation.level >= 0.2 && (
						<div className="settings-img">
							<img src={batteryLow} alt="battery-level" className={context === "details" ? "details" : ""} />
							{context === "details" ? <p>{batteryInformation.level * 100}%</p> : ""}
						</div>
					)}
					{batteryInformation.level < 0.2 && (
						<div className="settings-img">
							<img src={batteryEmpty} alt="battery-level" className={context === "details" ? "details" : ""} />
							{context === "details" ? <p>{batteryInformation.level * 100}%</p> : ""}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Battery;
