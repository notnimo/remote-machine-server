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

import { baseCloseButton } from "@/src/lib/dialog-types";

export function Buttons({
	buttons,
}: {
	buttons: Record<string, baseCloseButton>;
}) {
	let temp = <></>;
	for (const button in buttons) {
		if (buttons[button].closeDialogOnClick) {
			temp = (
				<>
					{temp}
					<DialogClose asChild>
						<Button
							variant={buttons[button].variant}
							type={buttons[button].type}
							onClick={buttons[button].onClick}
						>
							{buttons[button].text}
						</Button>
					</DialogClose>
				</>
			);
			continue;
		}
		temp = (
			<>
				{temp}
				<Button
					variant={buttons[button].variant}
					type={buttons[button].type}
					onClick={buttons[button].onClick}
				>
					{buttons[button].text}
				</Button>
			</>
		);
	}
	return temp;
}
