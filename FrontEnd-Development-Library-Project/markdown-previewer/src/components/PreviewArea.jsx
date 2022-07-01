import React from "react";
import Toolbar from "./Toolbar";

const PreviewArea = () => {
	const previewAreaStyle = {
		backgroundColor: "#3F4E4F",
		width: "100%",
		margin: "10px",
		borderRadius: "5px",
		border: "4px solid #A27B5C",
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
		display: "flex",
		flexDirection: "column"
	};

	function saludoPreviewArea() {
		console.log("preview area");
	}

	return (
		<div style={previewAreaStyle}>
			<Toolbar boxName={"Preview"} saludo={saludoPreviewArea} />
			PreviewSquare
		</div>
	);
};

export default PreviewArea;
