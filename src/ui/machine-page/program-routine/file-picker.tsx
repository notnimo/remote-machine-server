import { Field, FieldDescription, FieldLabel } from "@/src/components/field";
import { Input } from "@/src/components/input";

export function FilePicker() {
	return (
		<div className="max-w-xl">
			<Field>
				<FieldLabel htmlFor="picture">Bash File</FieldLabel>
				<Input id="picture" type="file" accept=".sh" />
				<FieldDescription>Select your bash routine.</FieldDescription>
			</Field>
		</div>
	);
}
