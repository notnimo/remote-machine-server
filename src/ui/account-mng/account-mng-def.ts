import {
	baseDialog,
	baseField,
	baseCloseButton,
	cancel,
} from "@/src/lib/dialog-type-define";

const saveUserChanges = () => {}; //placeholder

const usernameField: baseField = {
	htmlFor: "username",
	id: "username-field",
	label: "User ID",
	type: "email",
	placeholder: "your-id",
	autoComplete: false,
};

const passwordField: baseField = {
	htmlFor: "password",
	id: "password-field",
	label: "Password",
	type: "password",
	placeholder: "••••••••••••••••",
	autoComplete: false,
};

const saveChanges: baseCloseButton = {
	text: "Save Changes",
	variant: "outline",
	type: "submit",
	onClick: saveUserChanges,
	closeDialogOnClick: false,
};

const manageAccountDialog: baseDialog = {
	title: "Manage Your Account",
	description: "Update your account settings",
	fields: {
		username: usernameField,
		password: passwordField,
	},
	closeButton: {
		cancel: cancel,
		save: saveChanges,
	},
};

export { manageAccountDialog };
