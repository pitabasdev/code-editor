import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";
import { useState } from "react";

// import { Typography, Button } from "@mui/material";
const Head = styled(Box)`
	background: #1d1e22;
	padding: 9px 12px;
	display: flex;
`;
const Header = styled(Box)`
	display: flex;
	justify-content: space-between;
	background: #060606;
	color: #aaaebc;
	font-weight: 700;
`;
const Container = styled(Box)`
	flex-grow: 1;
	flex-basic: 0;
	display: flex;
	flex-direction: column;
	padding: 0 8px 8px;
`;
function Editor({ heading, language, value, onChange, icon, color }) {
	const [open, setOpen] = useState(true);

	const handleChange = (editor, data, value) => {
		onChange(value);
	};
	return (
		<Container style={open ? null : { flexGrow: 0 }}>
			<Header>
				<Head>
					<Box
						component="span"
						style={{
							background: "red",
							borderRadius: 5,
							marginRight: 5,
							height: 20,
							width: 20,
							display: "flex",
							placeContent: "center",
							color: "#000",
							paddingBottom: 2,
						}}
					>
						{icon}
					</Box>
					{heading}
				</Head>
				<CloseFullscreen
					fontSize="small"
					style={{ alignSelf: "center" }}
					onClick={() => setOpen((prevState) => !prevState)}
				/>
			</Header>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				className="controlled-editor"
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					lineNumbers: true,
					theme: "material",
				}}
			/>
		</Container>
	);
}

export default Editor;
