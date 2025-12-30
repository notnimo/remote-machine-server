import { baseField } from "@/src/ui/dialog/dialog-def/dialog-type-define";
import {
	CommonField,
	SelectField,
} from "@/src/ui/dialog/dialog-def/field-types";

const common = ["email", "password", "text", "number", "tel", "url"];

export function Fields({ fields }: { fields: Record<string, baseField> }) {
	let temp = <></>;
	for (const field in fields) {
		if (fields === null || common.includes(fields[field].type)) {
			temp = (
				<>
					{temp}
					<CommonField field={fields[field]} />
				</>
			);
		} else if (fields[field].type === "select") {
			temp = (
				<>
					{temp}
					<SelectField field={fields[field]} />
				</>
			);
		}
	}
	return temp;
}
