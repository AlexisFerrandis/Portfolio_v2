import React from "react";
import { useDispatch, useSelector } from "react-redux";

// img
import volumeMuted from "../../../../assets/navbars/topnavbar/audio-volume-muted.svg";
import volumeLow from "../../../../assets/navbars/topnavbar/audio-volume-low.svg";
import volumeMedium from "../../../../assets/navbars/topnavbar/audio-volume-medium.svg";
import volumeHigh from "../../../../assets/navbars/topnavbar/audio-volume-high.svg";

const Volume = ({ context }) => {
	const dispatch = useDispatch();
	const globalVariables = useSelector((state) => state.globalVariablesReducer);

	const handleVolumeModification = (e) => {
		dispatch({ type: "SET_VOLUME", payload: e.target.value });
	};

	const setMutedVolume = () => {
		dispatch({ type: "SET_VOLUME", payload: 0 });
		document.getElementById("range").value = 0;
	};

	return (
		<>
			{context === "details" ? (
				<button className="settings-details__content--setting">
					<div className="setting">
						{globalVariables.volume < 2 && <img src={volumeMuted} alt="volume-level" className="volume-invert" onClick={setMutedVolume} />}
						{globalVariables.volume >= 2 && globalVariables.volume < 35 && <img src={volumeLow} alt="volume-level" className="volume-invert volume-to-mute" onClick={setMutedVolume} />}
						{globalVariables.volume >= 35 && globalVariables.volume < 75 && <img src={volumeMedium} alt="volume-level" className="volume-invert volume-to-mute" onClick={setMutedVolume} />}
						{globalVariables.volume >= 75 && globalVariables.volume <= 100 && <img src={volumeHigh} alt="volume-level volume-to-mute" onClick={setMutedVolume} />}
						<input type="range" min="0" max="100" id="range" defaultValue={globalVariables.volume} onChange={handleVolumeModification} />
					</div>
				</button>
			) : (
				<div className="settings-img">
					{globalVariables.volume < 2 && <img src={volumeMuted} alt="volume-level" className="volume-invert" />}
					{globalVariables.volume >= 2 && globalVariables.volume < 35 && <img src={volumeLow} alt="volume-level" className="volume-invert" />}
					{globalVariables.volume >= 35 && globalVariables.volume < 75 && <img src={volumeMedium} alt="volume-level" className="volume-invert" />}
					{globalVariables.volume >= 75 && globalVariables.volume <= 100 && <img src={volumeHigh} alt="volume-level" />}
				</div>
			)}
		</>
	);
};

export default Volume;
