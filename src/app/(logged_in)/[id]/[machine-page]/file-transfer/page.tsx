"use client";

import { useState } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/src/components/button";

import { TextTyping } from "@/src/ui/text-writing";
import { FilePicker } from "@/src/ui/machine-page/program-routine/file-picker";
import { getUserId, transferFile } from "@/src/lib/placeholder";

export default function FileTransferPage() {
  const msg: string = "Transfer a file to Remote Machine";

  const [fileAccepted, setFileAccepted] = useState(false);
  return (
    <div className="flex grow flex-col h-full">
      <div className="flex flex-col items-center justify-end min-h-[35vh]">
        <TextTyping toType={[msg]} />
        <div className="text-base">Select the file to send</div>
      </div>
      <div className="min-h-[2vh]"></div>
      <FilePicker
        content={{
          label: "File",
          description: "Select a file",
          accept: "",
        }}
      />
      <div className="min-h-[2vh]"></div>
      <div className="flex justify-center grow">
        <div>
          <Button
            className="bg-primary-foreground hover:bg-gray-200 text-black flex items-center flex-row justify-between"
            onClick={() => transferFile({}, getUserId(), setFileAccepted)}
          >
            <ArrowRight className="h-4 w-4" />
            Program Routine
          </Button>
        </div>
        <div>
          <Button variant="outline" className="ml-4">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
