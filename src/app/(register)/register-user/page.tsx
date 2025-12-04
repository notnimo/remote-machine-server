import { Card } from "@/src/components/card";
import {
	FormHeaderGroup,
	FormSubmitGroup,
	FormInputGroup,
} from "@/src/ui/form-components";

import {
	usernameField,
	passwordField,
	accessLevelField,
} from "@/src/lib/form-fields";

export default function AddMachineCard() {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-6 p-4">
			<Card className="w-full max-w-sm bg-black">
				<FormHeaderGroup
					formHeader="Register User to Network"
					formDescription="Input User ID, access level and password"
				/>
				<FormInputGroup
					inputFields={{
						username1: usernameField,
						select1: accessLevelField,
						password1: passwordField,
					}}
				/>
				<FormSubmitGroup type="submit" content="Add Machine" />
			</Card>
		</div>
	);
}
