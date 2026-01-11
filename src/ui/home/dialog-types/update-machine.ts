import {
	baseDialog,
	baseField,
	baseCloseButton,
	cancel,
} from "@/src/ui/dialog/dialog-type-define";
import { updateMachine } from "@/src/lib/placeholder";

const currentMachineIDField: baseField = {
	htmlFor: "current-machine-id",
	id: "current-machine-id-field",
	label: "Current Machine ID",
	type: "email",
	placeholder: "a1b2c3d4",
	autoComplete: false,
};

const newMachineIDField: baseField = {
	htmlFor: "new-machine-id",
	id: "new-machine-id-field",
	label: "New Machine ID",
	type: "email",
	placeholder: "a1b2c3d4",
	autoComplete: false,
};

const machineNewPasswordField: baseField = {
	htmlFor: "new-machine-password",
	id: "machine-new-password-field",
	label: "New Machine Password",
	type: "password",
	placeholder: "••••••••••••••••",
	autoComplete: false,
};

const NewIpField: baseField = {
	htmlFor: "newMachineIp",
	id: "new-machine-ip-field",
	label: "New Machine Local IP Address",
	type: "email",
	placeholder: "###.###.###.###",
	autoComplete: false,
};

const updateMachineButton: baseCloseButton = {
	text: "Update Machine Info",
	variant: "outline",
	type: "submit",
	onClick: updateMachine,
	closeDialogOnClick: false,
};

const updateMachineDialog: baseDialog = {
	title: "Update Machine Info",
	description: "Enter original machine Id and update credentials",
	fields: {
		currentMachineID: currentMachineIDField,
		newMachineIp: NewIpField,
		newMachineID: newMachineIDField,
		newMachinePassword: machineNewPasswordField,
	},
	closeButton: {
		cancel: cancel,
		add: updateMachineButton,
	},
};

export { updateMachineDialog };
