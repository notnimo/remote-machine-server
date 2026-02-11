"use client";

import { JSX } from "react";

import { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

export function TerminalController({
  title,
  actOnInput,
}: {
  title: string;
  actOnInput: (input: string, getTerminalLineData: () => string) => void;
}) {
  const [terminalLineData, setTerminalLineData] = useState([""]);

  const getTerminalLineData = () => {
    return terminalLineData[0];
  };

  return (
    <div className="container">
      <Terminal
        name={title}
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) =>
          actOnInput(terminalInput, getTerminalLineData)
        }
        TopButtonsPanel={() => null}
        startingInputValue=""
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}
