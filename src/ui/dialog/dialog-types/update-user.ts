import {
	baseDialog,
	baseField,
	baseCloseButton,
	baseFieldSelect,
	cancel,
} from "@/src/ui/dialog/dialog-def/dialog-type-define";

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

const newAccessLevelField: baseFieldSelect = {
	htmlFor: "new-access-level",
	id: "new-access-level-field",
	label: "Update Access Level",
	type: "select",
	selectPlaceholder: "Select Access Level",
	options: ["User", "Supervisor", "Admin"],
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
	text: "Update User Credentials",
	variant: "outline",
	type: "submit",
	onClick: updateUser,
	closeDialogOnClick: false,
};

const updateUserDialog: baseDialog = {
	title: "Update User Details",
	description: "Enter user id and update user details",
	fields: {
		currentUsername: currentUsernameField,
		newUsername: newUsernameField,
		newAccessLevel: newAccessLevelField,
		userPassword: NewPasswordField,
	},
	closeButton: {
		cancel: cancel,
		add: updateUserButton,
	},
};

export { updateUserDialog };
