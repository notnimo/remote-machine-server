"use client";

import { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const TerminalController = ({
	welcomeMsg,
	title,
	actOnInput,
}: {
	welcomeMsg: string;
	title: string;
	actOnInput: (input: string) => void;
}) => {
	const [terminalLineData, setTerminalLineData] = useState([
		<TerminalOutput>{welcomeMsg}</TerminalOutput>,
	]);

	return (
		<Terminal
			name={title}
			colorMode={ColorMode.Dark}
			onInput={(terminalInput) => actOnInput(terminalInput)}
			TopButtonsPanel={() => null}
			startingInputValue="C/Users/Admin/Desktop $"
		>
			{terminalLineData}
		</Terminal>
	);
};
export default TerminalController;
