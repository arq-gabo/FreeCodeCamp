import React from "react";
import Toolbar from "./Toolbar";

const PreviewArea = () => {
	const previewAreaStyle = {
		backgroundColor: "#3F4E4F",
		width: "50%",
		margin: "10px",
		borderRadius: "5px",
		border: "4px solid #A27B5C",
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
	};

	return (
		<div style={previewAreaStyle}>
			<Toolbar boxName={"Preview"} />
			PreviewSquare
		</div>
	);
};

export default PreviewArea;
