import React from "react";

//Common Styles
import { commonStyles } from "../context/CommonStyles";

//Components
import Toolbar from "./Toolbar";

const PreviewArea = () => {
	const previewAreaStyle = {
		backgroundColor: commonStyles.backgroundAreas,
		width: commonStyles.width,
		margin: "10px",
		borderRadius: commonStyles.borderRadius,
		border: commonStyles.border,
		boxShadow: commonStyles.boxShadow,
		display: commonStyles.display,
		flexDirection: commonStyles.flexDirection
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
