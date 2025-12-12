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

import { baseField } from "@/src/lib/dialog-types";

export function Fields({ fields }: { fields: Record<string, baseField> }) {
	let temp = <></>;
	let i = 0;
	for (const key in fields) {
		const field = Object.keys(fields)[i];
		i++;
		temp = (
			<>
				{temp}
				<Field>
					<Label htmlFor={fields[field]["htmlFor"]}>
						{fields[field].label}
					</Label>
					<Input
						id={fields[field].id}
						name={fields[field].htmlFor}
						type={fields[field].type}
						placeholder={fields[field].placeholder}
						autoComplete={fields[field].autoComplete ? "on" : "off"}
					/>
				</Field>
			</>
		);
	}
	return temp;
}
