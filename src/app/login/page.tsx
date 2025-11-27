import { Card } from "@/src/components/card";

import {
	FormHeaderGroup,
	FormSubmitGroup,
	FormInputGroup,
} from "@/src/ui/form-components";

export default function LoginCard() {
	const usernameField = {
		htmlFor: "username",
		label: "Username",
		placeholder: "username",
		type: "user-name",
		id: "user-name",
	};
	const passwordField = {
		htmlFor: "password",
		label: "Password",
		placeholder: "password",
		type: "password",
		id: "password",
	};
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-6 p-4">
			<Card className="w-full max-w-sm bg-black">
				<FormHeaderGroup
					formHeader="Welcome Back"
					formDescription="Please sign in to your account to continue"
				/>
				<FormInputGroup
					inputFields={{
						username: usernameField,
						password: passwordField,
					}}
				/>
				<FormSubmitGroup type="login" content="Sign In" />
			</Card>
		</div>
	);
}
