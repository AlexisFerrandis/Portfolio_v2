import React, { useRef } from "react";
import { Rnd } from "react-rnd";

const FolderExplorer = () => {
	const nodeRef = useRef(null);
	return (
		<Rnd
			default={{
				x: 0,
				y: 0,
				width: 320,
				height: 200,
			}}
		>
			<div ref={nodeRef}>Hello</div>
		</Rnd>
	);
};

export default FolderExplorer;
