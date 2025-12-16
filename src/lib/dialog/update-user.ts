import {
	baseDialog,
	baseField,
	baseCloseButton,
	cancel,
} from "@/src/ui/dialog/dialog-types";

const updateUser = () => {}; //placeholder

const currentUsernameField: baseField = {
	htmlFor: "current-username",
	id: "current-username-field",
	label: "Current Username",
	type: "email",
	placeholder: "a1b2c3d4",
	autoComplete: false,
};

const newUsernameField: baseField = {
	htmlFor: "new-username",
	id: "new-username-field",
	label: "New Username",
	type: "email",
	placeholder: "a1b2c3d4",
	autoComplete: false,
};

const NewPasswordField: baseField = {
	htmlFor: "new-user-password",
	id: "new-user-password-field",
	label: "New User Password",
	type: "password",
	placeholder: "••••••••••••••••",
	autoComplete: false,
};

const updateUserButton: baseCloseButton = {
	text: "Register User",
	variant: "outline",
	type: "submit",
	onClick: updateUser,
	closeDialogOnClick: false,
};

const updateUserDialog: baseDialog = {
	title: "Register New User",
	description: "Enter user details and create credentials",
	fields: {
		currentUsername: currentUsernameField,
		newUsername: newUsernameField,
		userPassword: NewPasswordField,
	},
	closeButton: {
		cancel: cancel,
		add: updateUserButton,
	},
};

export { updateUserDialog };
