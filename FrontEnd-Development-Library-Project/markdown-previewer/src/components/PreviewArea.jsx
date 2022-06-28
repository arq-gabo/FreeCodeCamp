import React from "react";
import Toolbar from "./Toolbar";

const PreviewArea = () => {
	const previewAreaStyle = {
		backgroundColor: "#3F4E4F",
		width: "50%",
		margin: "10px",
		borderRadius: "5px",
		border: "4px solid #A27B5C"
	};

	return (
		<div style={previewAreaStyle}>
			<Toolbar boxName={"Preview"} />
			PreviewSquare
		</div>
	);
};

export default PreviewArea;
