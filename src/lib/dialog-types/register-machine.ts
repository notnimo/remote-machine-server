import {
  baseDialog,
  baseField,
  baseCloseButton,
  cancel,
} from "@/src/lib/dialog-type-define";
import { registerMachine } from "@/src/lib/machine-def";

const machineIDField: baseField = {
  htmlFor: "machine-id",
  id: "machine-id-field",
  label: "Create Machine ID",
  type: "email",
  placeholder: "a1b2c3d4",
  autoComplete: false,
};

const machinePasswordField: baseField = {
  htmlFor: "machine-password",
  id: "machine-password-field",
  label: "Create Machine Password",
  type: "password",
  placeholder: "••••••••••••••••",
  autoComplete: false,
};

const IpField: baseField = {
  htmlFor: "machineIp",
  id: "machineIp-field",
  label: "Machine Local IP Address",
  type: "email",
  placeholder: "###.###.###.###",
  autoComplete: false,
};

const registerMachineButton: baseCloseButton = {
  text: "Register Machine",
  variant: "outline",
  type: "submit",
  onClick: registerMachine,
  closeDialogOnClick: false,
};

const registerMachineDialog: baseDialog = {
  title: "Register New Machine",
  description: "Enter machine details and create credentials",
  fields: {
    machineIp: IpField,
    machineID: machineIDField,
    machinePassword: machinePasswordField,
  },
  closeButton: {
    cancel: cancel,
    add: registerMachineButton,
  },
};

export { registerMachineDialog };
