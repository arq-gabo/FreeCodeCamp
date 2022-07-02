import React from "react";

//Common Styles
import { commonStyles } from "../context/CommonStyles";

//Components
import Toolbar from "./Toolbar";

const TextArea = () => {
	const textAreaStyle = {
		width: commonStyles.width,
		margin: "10px",
		border: commonStyles.border,
		boxShadow: commonStyles.boxShadow,
		borderRadius: commonStyles.borderRadius,
		display: commonStyles.display,
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

	function saludoTextArea() {
		console.log("textArea");
	}

	return (
		<div style={textAreaStyle}>
			<Toolbar boxName={"Editor"} saludo={saludoTextArea} />
			<textarea
				type="text"
				style={textAreaEditorStyle}
				placeholder="Write you text here..."
			></textarea>
		</div>
	);
};

export default TextArea;
