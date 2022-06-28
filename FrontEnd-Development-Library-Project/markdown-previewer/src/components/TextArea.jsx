import React from "react";
import Toolbar from "./Toolbar";

const TextArea = props => {
	const textAreaStyle = {
		width: "50%",
		margin: "10px",
		border: "4px solid #A27B5C",
		borderRadius: "5px",
		display: "flex",
		flexDirection: "column"
	};

	const textAreaEditorStyle = {
		backgroundColor: "#3F4E4F",
		color: "#DCD7C9",
		width: "99%",
		height: "99%",
		outline: "none",
		resize: "none"
	};

	return (
		<div style={textAreaStyle}>
			<Toolbar boxName={"Editor"} />
			<textarea type="text" style={textAreaEditorStyle}></textarea>
		</div>
	);
};

export default TextArea;
