import React, { useContext } from "react";

//Common Styles
import { commonStyles } from "../context/CommonStyles";
import { StyleContext } from "../context/StyleContext";

//Components
import Toolbar from "./Toolbar";

const TextArea = () => {
	// recive value from StyleContext high order component using Context api
	const { displayTxtArea, txtAreaDisplayExt, areaExt } =
		useContext(StyleContext);

	const textAreaStyle = {
		width: commonStyles.width,
		margin: "10px",
		border: commonStyles.border,
		boxShadow: commonStyles.boxShadow,
		borderRadius: commonStyles.borderRadius,
		display: displayTxtArea,
		flexDirection: commonStyles.flexDirection
	};

	const textAreaEditorStyle = {
		backgroundColor: commonStyles.backgroundAreas,
		color: commonStyles.colorText,
		width: "calc(100% - 6px)",
		height: commonStyles.width,
		outline: "none",
		resize: "none"
	};

	return (
		<div style={textAreaStyle}>
			<Toolbar
				boxName={"Editor"}
				funcExtend={txtAreaDisplayExt}
				extend={areaExt}
			/>
			<textarea
				type="text"
				style={textAreaEditorStyle}
				placeholder="Write you text here..."
			></textarea>
		</div>
	);
};

export default TextArea;
