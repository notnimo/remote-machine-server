"use client";

import { useState } from "react";

import { UserRoundPen } from "lucide-react";

import { Button } from "@/src/components/button";

import { updateUserDialog } from "@/src/ui/dialog/dialog-types/update-user";
import { CDialog } from "@/src/ui/dialog/dialog";

export function UpdateUser() {
	const [updateUserOpen, setUpdateUserOpen] = useState(false);

	return (
		<>
			<Button
				onClick={() => setUpdateUserOpen(true)}
				className="text-l"
				variant="outline"
			>
				<UserRoundPen /> Update User
			</Button>
			<CDialog
				open={updateUserOpen}
				onOpenChange={setUpdateUserOpen}
				dialogProps={updateUserDialog}
			/>
		</>
	);
}
