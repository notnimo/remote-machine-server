"use client";

import { TerminalController } from "@/src/ui/machine-page/terminal/terminal";

export default function TerminalPage() {
  return (
    <TerminalController
      title="welcome to your remote machine terminal"
      actOnInput={(input, getTerminalLineData) => {}}
    />
  );
}
