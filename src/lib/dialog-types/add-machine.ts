import {
	baseDialog,
	baseField,
	baseCloseButton,
	cancel,
} from "@/src/lib/dialog-type-define";
import { addMachine } from "@/src/lib/placeholder";

const machineIDField: baseField = {
	htmlFor: "machine-id",
	id: "machine-id-field",
	label: "Machine ID",
	type: "email",
	placeholder: "a1b2c3d4",
	autoComplete: true,
};

const machinePasswordField: baseField = {
	htmlFor: "machine-password",
	id: "machine-password-field",
	label: "Machine Password",
	type: "password",
	placeholder: "••••••••••••••••",
	autoComplete: false,
};

const addMachineButton: baseCloseButton = {
	text: "Add Machine",
	variant: "outline",
	type: "submit",
	onClick: addMachine,
	closeDialogOnClick: false,
};

const addMachineDialog: baseDialog = {
	title: "Add New Machine",
	description: "Enter the details of the machine you want to add",
	fields: {
		machineID: machineIDField,
		machinePassword: machinePasswordField,
	},
	closeButton: {
		cancel: cancel,
		add: addMachineButton,
	},
};

export { addMachineDialog };
