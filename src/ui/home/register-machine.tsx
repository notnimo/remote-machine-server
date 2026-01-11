"use client";

import { useState } from "react";

import { LaptopMinimal } from "lucide-react";

import { Button } from "@/src/components/button";

import { registerMachineDialog } from "@/src/ui/home/dialog-types/register-machine";
import { CDialog } from "@/src/ui/dialog/dialog-def/dialog";

export function RegisterMachine() {
	const [registerMachineOpen, setRegisterMachineOpen] = useState(false);

	return (
		<>
			<Button
				onClick={() => setRegisterMachineOpen(true)}
				className="text-l"
				variant="outline"
			>
				<LaptopMinimal /> Register Machine
			</Button>
			<CDialog
				open={registerMachineOpen}
				onOpenChange={setRegisterMachineOpen}
				dialogProps={registerMachineDialog}
			/>
		</>
	);
}
