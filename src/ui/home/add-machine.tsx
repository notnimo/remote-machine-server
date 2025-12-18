"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { Button } from "@/src/components/button";

import { addMachineDialog } from "@/src/ui/dialog/dialog-types/add-machine";
import { CDialog } from "@/src/ui/dialog/dialog";

export function AddMachine() {
	const [addMachineOpen, setAddMachineOpen] = useState(false);

	return (
		<>
			<Button
				onClick={() => setAddMachineOpen(true)}
				className="text-l"
				variant="outline"
			>
				<Plus /> Add Machine
			</Button>
			<CDialog
				open={addMachineOpen}
				onOpenChange={setAddMachineOpen}
				dialogProps={addMachineDialog}
			/>
		</>
	);
}
