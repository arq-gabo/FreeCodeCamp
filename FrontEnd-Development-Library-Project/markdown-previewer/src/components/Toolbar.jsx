import React from "react";
import { TbArrowsDiagonal, TbArrowsDiagonalMinimize } from "react-icons/tb";

const Toolbar = props => {
	const toolbarStyle = {
		backgroundColor: "#A27B5C",
		textAlign: "center",
		border: "1px solid #A27B5C",
		display: "flex",
		justifyContent: "space-between"
	};

	const iconStyle = {
		cursor: "pointer"
	};

	return (
		<div style={toolbarStyle}>
			{props.boxName}
			<div style={iconStyle} onClick={props.funcExtend}>
				{props.extend ? <TbArrowsDiagonalMinimize /> : <TbArrowsDiagonal />}
			</div>
		</div>
	);
};

export default Toolbar;
