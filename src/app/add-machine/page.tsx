import { Card } from "@/src/components/card";

import {
	FormHeaderGroup,
	FormSubmitGroup,
	FormInputGroup,
} from "@/src/ui/form-components";

export default function AddMachineCard() {
	const ipField = {
		htmlFor: "username",
		label: "Local IP Address",
		placeholder: "###.###.###.###",
		type: "user-name",
		id: "ip-address-field",
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
					formDescription="Input local IP and password of the machine"
				/>
				<FormInputGroup
					inputFields={{
						username: ipField,
						password: machinePasswordField,
					}}
				/>
				<FormSubmitGroup type="submit" content="Add Machine" />
			</Card>
		</div>
	);
}
