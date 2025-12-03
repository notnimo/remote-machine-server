import { Input } from "@/src/components/input";
import { Label } from "@/src/components/label";

export function Username({
	inputFields,
	field,
}: {
	inputFields?: any;
	field?: any;
}) {
	return (
		<div className="grid gap-2">
			<Label htmlFor={inputFields[field]["htmlFor"]}>
				{inputFields[field]["label"]}
			</Label>
			<Input
				id={inputFields[field]["id"]}
				type={inputFields[field]["type"]}
				placeholder={inputFields[field]["placeholder"]}
				required
			/>
		</div>
	);
}

export function Password({
	inputFields,
	field,
}: {
	inputFields?: any;
	field?: any;
}) {
	return (
		<div className="grid gap-2">
			<div className="flex items-center">
				<Label htmlFor={inputFields[field]["htmlFor"]}>
					{inputFields[field]["label"]}
				</Label>
				<a
					href="#"
					className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
				>
					Forgot your password?
				</a>
			</div>
			<Input
				id={inputFields[field]["id"]}
				type={inputFields[field]["type"]}
				placeholder={inputFields[field]["placeholder"]}
				required
			/>
		</div>
	);
}
