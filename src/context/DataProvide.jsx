import { createContext, useState } from "react";

export const DataConst = createContext(null);

function DataProvide({ children }) {
	const [html, setHtml] = useState("");
	const [js, setJs] = useState("");
	const [css, setCss] = useState("");
	return (
		<DataConst.Provider
			value={{
				html,
				setHtml,
				css,
				setCss,
				js,
				setJs,
			}}
		>
			{children}
		</DataConst.Provider>
	);
}

export default DataProvide;
