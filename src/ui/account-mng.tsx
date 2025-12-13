"use client";

import { useState } from "react";
import { User, LogOut } from "lucide-react";

import { Button } from "@/src/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/src/components/dropdown-menu";

import { CDialog } from "@/src/ui/dialog/dialog";

import { manageAccountDialogProps } from "@/src/lib/dialog/account-mng";

export function AccountMngMenuDialog() {
	const [showNewDialog, setShowNewDialog] = useState(false);
	const logUserOut = () => {}; //placeholder

	return (
		<>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" aria-label="Open menu" size="icon">
						<User />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-40 bg-black text-white" align="end">
					<DropdownMenuGroup>
						<DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
							Manage Account
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => logUserOut()}>
							<LogOut /> Logout
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<CDialog
				open={showNewDialog}
				onOpenChange={setShowNewDialog}
				dialogProps={manageAccountDialogProps}
			/>
		</>
	);
}
