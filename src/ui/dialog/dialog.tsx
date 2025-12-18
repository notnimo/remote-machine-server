"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/src/components/dialog";
import { FieldGroup } from "@/src/components/field";

import { baseDialog } from "@/src/ui/dialog/dialog-type-define";
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
