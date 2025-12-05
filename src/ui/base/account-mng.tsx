"use client";

import { useState } from "react";
import { User, LogOut } from "lucide-react";

import { Button } from "@/src/components/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/src/components/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/src/components/dropdown-menu";
import { Field, FieldGroup, FieldLabel } from "@/src/components/field";
import { Input } from "@/src/components/input";
import { Label } from "@/src/components/label";
import { Textarea } from "@/src/components/textarea";

export function DropdownMenuDialog() {
	const [showNewDialog, setShowNewDialog] = useState(false);

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
						<DropdownMenuItem>
							<LogOut /> Logout
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			{/*<Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Create New File</DialogTitle>
						<DialogDescription>
							Provide a name for your new file. Click create when you&apos;re
							done.
						</DialogDescription>
					</DialogHeader>
					<FieldGroup className="pb-3">
						<Field>
							<FieldLabel htmlFor="filename">File Name</FieldLabel>
							<Input id="filename" name="filename" placeholder="document.txt" />
						</Field>
					</FieldGroup>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">Create</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>*/}
		</>
	);
}
