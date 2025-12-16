import { Field, FieldDescription, FieldLabel } from "@/src/components/field";
import { Input } from "@/src/components/input";
import { Label } from "@/src/components/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/src/components/select";

import { baseField } from "@/src/ui/dialog/dialog-types";

const common = ["email", "password", "text", "number", "tel", "url"];

export function Fields({ fields }: { fields: Record<string, baseField> }) {
	let temp = <></>;
	for (const field in fields) {
		if (fields === null || common.includes(fields[field].type)) {
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

		if (fields[field].type === "select") {
			temp = (
				<>
					{temp}
					<Field>
						<Label htmlFor={fields[field].htmlFor}>{fields[field].label}</Label>
						<Select>
							<SelectTrigger className="w-full"></SelectTrigger>
							<SelectContent>
								{fields[field].options.map((option: any) => (
									<SelectItem key={option} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</Field>
				</>
			);
		}
	}
	return temp;
}
