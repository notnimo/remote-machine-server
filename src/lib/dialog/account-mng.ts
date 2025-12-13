import {
	baseDialog,
	baseField,
	baseCloseButton,
} from "@/src/ui/dialog/dialog-types";

const saveUserChanges = () => {}; //placeholder

const usernameField: baseField = {
	htmlFor: "username",
	id: "username",
	label: "User ID",
	type: "email",
	placeholder: "your-id",
	autoComplete: false,
};

const passwordField: baseField = {
	htmlFor: "password",
	id: "password",
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

const cancel: baseCloseButton = {
	text: "Cancel",
	variant: "ghost",
	onClick: () => {},
	closeDialogOnClick: true,
};

const manageAccountDialogProps: baseDialog = {
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

export { manageAccountDialogProps };
