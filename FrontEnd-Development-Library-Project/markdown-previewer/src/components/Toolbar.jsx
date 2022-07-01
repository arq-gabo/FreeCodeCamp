import React from "react";
import { TbArrowsDiagonal } from "react-icons/tb";

const Toolbar = props => {
	const toolbarStyle = {
		backgroundColor: "#A27B5C",
		textAlign: "center",
		border: "4px solid #A27B5C",
		display: "flex",
		justifyContent: "space-between"
	};

	const iconStyle = {
		cursor: "pointer"
	};

	return (
		<div style={toolbarStyle}>
			{props.boxName}
			<TbArrowsDiagonal style={iconStyle} onClick={props.saludo} />
		</div>
	);
};

export default Toolbar;
