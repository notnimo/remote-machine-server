import {
	baseDialog,
	baseField,
	baseCloseButton,
	cancel,
	baseFieldSelect,
} from "@/src/ui/dialog/dialog-def/dialog-type-define";

const registerUser = () => {}; //placeholder

const usernameField: baseField = {
	htmlFor: "username",
	id: "username-field",
	label: "Create Username",
	type: "email",
	placeholder: "a1b2c3d4",
	autoComplete: false,
};

const userPasswordField: baseField = {
	htmlFor: "user-password",
	id: "user-password-field",
	label: "Create User Password",
	type: "password",
	placeholder: "••••••••••••••••",
	autoComplete: false,
};

const userAccessLevelField: baseFieldSelect = {
	htmlFor: "access-level",
	id: "access-level-field",
	label: "Access Level",
	type: "select",
	selectPlaceholder: "Select Access Level",
	options: ["User", "Supervisor", "Admin"],
	autoComplete: false,
};

const registerUserButton: baseCloseButton = {
	text: "Register User",
	variant: "outline",
	type: "submit",
	onClick: registerUser,
	closeDialogOnClick: false,
};

const registerUserDialog: baseDialog = {
	title: "Register New User",
	description: "Enter user details and create credentials",
	fields: {
		username: usernameField,
		userAccessLevel: userAccessLevelField,
		userPassword: userPasswordField,
	},
	closeButton: {
		cancel: cancel,
		add: registerUserButton,
	},
};

export { registerUserDialog };
