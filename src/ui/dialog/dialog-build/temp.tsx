"use client";

import { useState } from "react";

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
import { Field, FieldGroup, FieldLabel } from "@/src/components/field";
import { Input } from "@/src/components/input";
import { Label } from "@/src/components/label";

import { fooState, setFooState } from "@/src/lib/dialog-states";

export function DropdownMenuDialog() {
	//const [showAddMachineDialog, setShowAddMachineDialog] = useState(false);

	return (
		<>
			<Dialog open={fooState} onOpenChange={setFooState}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add Machine</DialogTitle>
						<DialogDescription>
							Enter machine ID and password to add it to your account.
						</DialogDescription>
					</DialogHeader>
					<FieldGroup className="py-3">
						<Field>
							<Label htmlFor="username">Machine ID</Label>
							<Input
								id="username-field"
								name="username"
								type="email"
								placeholder="a1b2c3d4"
								autoComplete="off"
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="password">Machine Password</FieldLabel>
							<Input
								id="password-field"
								name="username"
								type="password"
								placeholder="••••••••••••••••"
								autoComplete="off"
							/>
						</Field>
					</FieldGroup>
					<DialogFooter>
						<DialogClose asChild>
							<Button>Cancel</Button>
						</DialogClose>
						<Button type="submit" variant="outline">
							Add
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
