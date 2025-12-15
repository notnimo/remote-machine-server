import { Field } from "@/src/components/field";
import { Input } from "@/src/components/input";
import { Label } from "@/src/components/label";

import { baseField } from "@/src/ui/dialog/dialog-types";

const common = ["email", "password", "text", "number", "tel", "url"];

export function Fields({ fields }: { fields: Record<string, baseField> }) {
	let temp = <></>;
	for (const field in fields) {
		if (false) {
		}
		temp = (
			<>
				{temp}
				<Field>
					<Label htmlFor={fields[field].htmlFor}>{fields[field].label}</Label>
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
