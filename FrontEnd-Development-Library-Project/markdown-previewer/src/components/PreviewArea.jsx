import React, { useContext } from "react";

//Common Styles
import { commonStyles } from "../context/CommonStyles";
import { StyleContext } from "../context/StyleContext";

//Components
import Toolbar from "./Toolbar";

const PreviewArea = () => {
	// recive value from StyleContext high order component
	const { displayPrwArea, prwAreaDisplayExt, areaExt } =
		useContext(StyleContext);

	const previewAreaStyle = {
		backgroundColor: commonStyles.backgroundAreas,
		width: commonStyles.width,
		margin: "10px",
		borderRadius: commonStyles.borderRadius,
		border: commonStyles.border,
		boxShadow: commonStyles.boxShadow,
		display: displayPrwArea,
		flexDirection: commonStyles.flexDirection
	};

	return (
		<div style={previewAreaStyle}>
			<Toolbar
				boxName={"Preview"}
				funcExtend={prwAreaDisplayExt}
				extend={areaExt}
			/>
			PreviewSquare
		</div>
	);
};

export default PreviewArea;
