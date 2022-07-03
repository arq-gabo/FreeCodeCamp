import React from "react";

//Common Styles
import { commonStyles } from "./context/CommonStyles.js";
import { StyleProvider } from "./context/StyleContext.js";

//Components
import TextArea from "./components/TextArea.jsx";
import PreviewSquare from "./components/PreviewArea.jsx";

function App() {
	const container = {
		display: commonStyles.display,
		flexDirection: commonStyles.flexDirection,
		justifyContent: commonStyles.justifyContent,
		height: "100vh",
		color: commonStyles.colorText
	};

	const header = {
		textAlign: commonStyles.textAlign,
		height: "5vh"
	};

	const boxTextAndPreview = {
		display: commonStyles.display,
		height: "93vh"
	};

	const footer = {
		textAlign: commonStyles.textAlign,
		height: "2vh"
	};

	return (
		<StyleProvider>
			<div style={container}>
				<h2 style={header}>Markdown Preview</h2>
				<div style={boxTextAndPreview}>
					<TextArea />
					<PreviewSquare />
				</div>
				<h5 style={footer}>By José Gabriel Guerra for FreeCodeCamp</h5>
			</div>
		</StyleProvider>
	);
}

export default App;
