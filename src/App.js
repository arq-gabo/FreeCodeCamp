import React from "react";

//Common Styles
import { commonStyles } from "./context/CommonStyles.js";

//Style Context
import { StyleProvider } from "./context/StyleContext.js";

//Text Context
import { TextProvider } from "./context/TextContext.js";

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
		height: "75vh",
		justifyContent: "center"
	};

	const footer = {
		textAlign: commonStyles.textAlign,
		height: "2vh"
	};

	const anchor = {
		textDecoration: "none",
		color: commonStyles.colorText
	};

	return (
		<StyleProvider>
			<div style={container}>
				<h2 style={header}>Markdown Preview</h2>
				<div style={boxTextAndPreview}>
					<TextProvider>
						<TextArea />
						<PreviewSquare />
					</TextProvider>
				</div>
				<h5 style={footer}>
					By José Gabriel Guerra for FreeCodeCamp{" "}
					<a
						style={anchor}
						target="noreferrer"
						href="https://github.com/arq-gabo/markdown-previewer"
					>
						- Show Code
					</a>
				</h5>
			</div>
		</StyleProvider>
	);
}

export default App;
