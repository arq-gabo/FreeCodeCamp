import "./App.css";
import TextArea from "./components/TextArea.jsx";
import PreviewSquare from "./components/PreviewArea.jsx";

function App() {
	const container = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "100%",
		height: "100vh",
		color: "#DCD7C9"
	};

	const header = {
		textAlign: "center",
		height: "5vh"
	};

	const boxTextAndPreview = {
		display: "flex",
		height: "93vh"
	};

	const footer = {
		textAlign: "center",
		height: "2vh"
	};

	return (
		<div style={container}>
			<h1 style={header}>Markdown Preview</h1>
			<div style={boxTextAndPreview}>
				<TextArea />
				<PreviewSquare />
			</div>
			<h4 style={footer}>By José Gabriel Guerra for FreeCodeCamp</h4>
		</div>
	);
}

export default App;
