import { Card } from "@/src/components/card";

import {
	FormHeaderGroup,
	FormSubmitGroup,
	FormInputGroup,
} from "@/src/ui/form-components";

export default function AddMachineCard() {
	const ipField = {
		htmlFor: "username",
		label: "Machine Local IP",
		placeholder: "###.###.###.###",
		type: "user-name",
		id: "ip-address-field",
	};
	const idField = {
		htmlFor: "username",
		label: "Machine ID",
		placeholder: "a1b2c3d4e5f6",
		type: "user-name",
		id: "id-address-field",
	};
	const machinePasswordField = {
		htmlFor: "password",
		label: "Machine Password",
		placeholder: "machine password",
		type: "password",
		id: "machine-password-field",
	};
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-6 p-4">
			<Card className="w-full max-w-sm bg-black">
				<FormHeaderGroup
					formHeader="Add Machine to list"
					formDescription="Input machine ID and password"
				/>
				<FormInputGroup
					inputFields={{
						username: ipField,
						username1: idField,
						password: machinePasswordField,
					}}
				/>
				<FormSubmitGroup type="submit" content="Add Machine" />
			</Card>
		</div>
	);
}
