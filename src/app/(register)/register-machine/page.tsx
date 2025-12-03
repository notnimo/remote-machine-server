import { Card } from "@/src/components/card";
import {
	FormHeaderGroup,
	FormSubmitGroup,
	FormInputGroup,
} from "@/src/ui/form-components";

import { ipField, idField, machinePasswordField } from "@/src/lib/form-fields";

export default function AddMachineCard() {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-6 p-4">
			<Card className="w-full max-w-sm bg-black">
				<FormHeaderGroup
					formHeader="Register Machine to Network"
					formDescription="Input local IP  of the machine, ID and password"
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
