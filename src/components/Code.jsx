import Editor from "./Editor";
import { Box, styled } from '@mui/material';
import { useContext } from 'react';
import { DataConst } from '../context/DataProvide';
const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`

function Code() {
	const { html, css, js, setHtml, setCss, setJs } = useContext(DataConst);

	return (
		<Container>
			<Editor
				language="xml"
				heading="HTML"
				value={html}
				onChange={setHtml}
				icon="/"
				color="#FF3C41"
			/>
			<Editor
				language="css"
				heading="CSS"
				value={css}
				onChange={setCss}
				icon="*"
				color="#0EBEFF"
			/>
			<Editor
				language="javascript"
				heading="JS"
				value={js}
				onChange={setJs}
				icon="( )"
				color="#FCD000"
			/>
		</Container>
	);
}

export default Code;
