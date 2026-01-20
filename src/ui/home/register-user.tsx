"use client";

import { useState } from "react";

import { UserRoundPlus } from "lucide-react";

import { Button } from "@/src/components/button";

import { registerUserDialog } from "@/src/lib/dialog-types/register-user";
import { CDialog } from "@/src/ui/dialog/dialog";

export function RegisterUser() {
	const [registerUserOpen, setRegisterUserOpen] = useState(false);

	return (
		<>
			<Button
				onClick={() => setRegisterUserOpen(true)}
				className="text-l"
				variant="outline"
			>
				<UserRoundPlus /> Register User
			</Button>
			<CDialog
				open={registerUserOpen}
				onOpenChange={setRegisterUserOpen}
				dialogProps={registerUserDialog}
			/>
		</>
	);
}
