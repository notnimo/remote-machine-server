import { Divide, LogIn } from "lucide-react";

import { Button } from "@/src/components/button";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/src/components/card";
import { Input } from "@/src/components/input";
import { Label } from "@/src/components/label";

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
				</>
			);
		} else if (field.startsWith("password")) {
			g = (
				<>
					{g}
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor={inputFields["password"]["htmlFor"]}>
								{inputFields["password"]["label"]}
							</Label>
							<a
								href="#"
								className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
							>
								Forgot your password?
							</a>
						</div>
						<Input
							id={inputFields["password"]["id"]}
							type={inputFields["password"]["type"]}
							placeholder={inputFields["password"]["placeholder"]}
							required
						/>
					</div>
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
