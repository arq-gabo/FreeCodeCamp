import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./PreviewArea.css";

//Common Styles
import { commonStyles } from "../context/CommonStyles";

//Style Context
import { StyleContext } from "../context/StyleContext";
//Text Context
import { TextContext } from "../context/TextContext";

//Components
import Toolbar from "./Toolbar";

const PreviewArea = () => {
	// recive value from StyleContext high order component
	const { displayPrwArea, prwAreaDisplayExt, areaExt } =
		useContext(StyleContext);

	const { input } = useContext(TextContext);

	const previewAreaStyle = {
		backgroundColor: commonStyles.backgroundAreas,
		width: areaExt ? commonStyles.widthExt : commonStyles.width,
		margin: "10px",
		borderRadius: commonStyles.borderRadius,
		border: commonStyles.border,
		boxShadow: commonStyles.boxShadow,
		display: displayPrwArea,
		flexDirection: commonStyles.flexDirection
	};

	const markdown = {
		height: "100%",
		overflow: "auto",
		marginLeft: "5px"
	};

	return (
		<div style={previewAreaStyle} className="markdown">
			<Toolbar
				boxName={"Preview"}
				funcExtend={prwAreaDisplayExt}
				extend={areaExt}
			/>
			<div style={markdown}>
				<ReactMarkdown
					children={input}
					remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
				/>
			</div>
		</div>
	);
};

export default PreviewArea;
