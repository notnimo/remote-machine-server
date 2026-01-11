"use client";

import { useState } from "react";

import { RefreshCw } from "lucide-react";

import { Button } from "@/src/components/button";

import { updateMachineDialog } from "@/src/ui/home/dialog-types/update-machine";
import { CDialog } from "@/src/ui/dialog/dialog-def/dialog";

export function UpdateMachine() {
	const [updateMachineOpen, setUpdateMachineOpen] = useState(false);

	return (
		<>
			<Button
				onClick={() => setUpdateMachineOpen(true)}
				className="text-l"
				variant="outline"
			>
				<RefreshCw /> Update Machine
			</Button>
			<CDialog
				open={updateMachineOpen}
				onOpenChange={setUpdateMachineOpen}
				dialogProps={updateMachineDialog}
			/>
		</>
	);
}
