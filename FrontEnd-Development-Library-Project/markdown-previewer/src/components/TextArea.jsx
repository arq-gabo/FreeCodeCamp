import React from "react";
import Toolbar from "./Toolbar";

const TextArea = props => {
	const textAreaStyle = {
		width: "50%",
		margin: "10px",
		border: "4px solid #A27B5C",
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
		borderRadius: "5px",
		display: "flex",
		flexDirection: "column"
	};

	const textAreaEditorStyle = {
		backgroundColor: "#3F4E4F",
		color: "#DCD7C9",
		width: "calc(100% - 6px)",
		height: "100%",
		outline: "none",
		resize: "none"
	};

	return (
		<div style={textAreaStyle}>
			<Toolbar boxName={"Editor"} />
			<textarea
				type="text"
				style={textAreaEditorStyle}
				placeholder="Write you text here..."
			></textarea>
		</div>
	);
};

export default TextArea;
