import { LogIn } from "lucide-react";

import { Button } from "@/src/components/button";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/src/components/card";

import { Username, Password, Select } from "@/src/ui/dialog-build/input-types";

export function FormHeaderGroup({
	formHeader,
	formDescription,
}: {
	formHeader?: string;
	formDescription?: string;
}) {
	return (
		<CardHeader>
			<CardTitle className="text-white"> {formHeader} </CardTitle>
			<CardDescription className="text-white">
				{formDescription}
			</CardDescription>
		</CardHeader>
	);
}

export function FormInputGroup({ inputFields }: { inputFields?: any }) {
	let g: any;
	for (let field in inputFields) {
		JSON.stringify(field);
		if (field.startsWith("username")) {
			g = (
				<>
					{g}
					<Username inputFields={inputFields} field={field} />
				</>
			);
		} else if (field.startsWith("password")) {
			g = (
				<>
					{g}
					<Password inputFields={inputFields} field={field} />
				</>
			);
		} else if (field.startsWith("select")) {
			g = (
				<>
					{g}
					<Select inputFields={inputFields} field={field} />
				</>
			);
		}
	}

	return (
		<CardContent className="text-white">
			<form>
				<div className="flex flex-col gap-6">{g}</div>
			</form>
		</CardContent>
	);
}

export function FormSubmitGroup({
	type,
	content,
}: {
	type: string;
	content?: string;
}) {
	if (type === "login") {
		return (
			<CardFooter className="flex-col gap-2">
				<Button type="submit" className="w-full">
					<LogIn className="" />
					{content}
				</Button>
			</CardFooter>
		);
	}

	return (
		<CardFooter className="flex-col gap-2">
			<Button type="submit" className="w-full">
				{content}
			</Button>
		</CardFooter>
	);
}
