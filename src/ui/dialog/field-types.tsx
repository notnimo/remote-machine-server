import { Field } from "@/src/components/field";
import { Input } from "@/src/components/input";
import { Label } from "@/src/components/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/src/components/select";

import { baseField, baseFieldSelect } from "@/src/ui/dialog/dialog-types";

export function CommonField({ field }: { field: baseField }) {
	return (
		<Field>
			<Label htmlFor={field.htmlFor}>{field.label}</Label>
			<Input
				id={field.id}
				name={field.htmlFor}
				type={field.type}
				placeholder={field.placeholder}
				autoComplete={field.autoComplete ? "on" : "off"}
			/>
		</Field>
	);
}

export function SelectField({ field }: { field: baseFieldSelect }) {
	return (
		<Field>
			<Label htmlFor={field.htmlFor}>{field.label}</Label>
			<Select>
				<SelectTrigger className="w-full">
					<SelectValue placeholder={field.selectPlaceholder} />
				</SelectTrigger>
				<SelectContent className="bg-black text-white">
					{field.options.map((option: any) => (
						<SelectItem key={option} value={option}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</Field>
	);
}
