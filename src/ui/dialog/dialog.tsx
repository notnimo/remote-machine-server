"use client";

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

import { baseDialog } from "@/src/lib/dialog-types";
import { Fields } from "@/src/ui/dialog/dialog-fields";
import { Buttons } from "@/src/ui/dialog/dialog-buttons";

export function CDialog({
	open,
	onOpenChange,
	dialogProps,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	dialogProps: baseDialog;
}) {
	return (
		<>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{dialogProps.title}</DialogTitle>
						<DialogDescription>{dialogProps.description}</DialogDescription>
					</DialogHeader>
					<FieldGroup className="py-3">
						<Fields fields={dialogProps.fields} />
					</FieldGroup>
					<DialogFooter>
						<Buttons buttons={dialogProps.closeButton} />
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
