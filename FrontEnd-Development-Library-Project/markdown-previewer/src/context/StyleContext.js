import React, { useState, createContext } from "react";

export const StyleContext = createContext();

const initialDisplayAreas = {
	initialDisplayTextArea: "flex",
	initialDisplayPreviewArea: "flex"
};

export const StyleProvider = ({ children }) => {
	const [displayTxtArea, setDisplayTxtArea] = useState(
		initialDisplayAreas.initialDisplayTextArea
	);
	const [displayPrwArea, setDisplayPrwArea] = useState(
		initialDisplayAreas.initialDisplayPreviewArea
	);

	const [areaExt, setAreaExt] = useState(false);

	//function for extend TextArea component set display in PreviewArea component
	function txtAreaDisplayExt() {
		if (displayPrwArea === "flex") {
			setDisplayPrwArea("none");
			setAreaExt(true);
		} else {
			setDisplayPrwArea("flex");
			setAreaExt(false);
		}
	}

	//function for extend PreviewArea component set display in TextArea component
	function prwAreaDisplayExt() {
		if (displayTxtArea === "flex") {
			setDisplayTxtArea("none");
			setAreaExt(true);
		} else {
			setDisplayTxtArea("flex");
			setAreaExt(false);
		}
	}

	return (
		<StyleContext.Provider
			value={{
				displayTxtArea,
				txtAreaDisplayExt,
				displayPrwArea,
				prwAreaDisplayExt,
				areaExt
			}}
		>
			{children}
		</StyleContext.Provider>
	);
};
