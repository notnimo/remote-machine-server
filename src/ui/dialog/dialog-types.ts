const typeOptList = [
	"button",
	"checkbox",
	"color",
	"date",
	"datetime-local",
	"email",
	"file",
	"hidden",
	"image",
	"month",
	"number",
	"password",
	"radio",
	"range",
	"reset",
	"search",
	"select",
	"tel",
	"text",
	"time",
	"url",
	"week",
] as const;

type typeOptions = (typeof typeOptList)[number];

type baseCloseButton = {
	text: string;
	variant:
		| "link"
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost";
	type?: "submit";
	onClick?: () => void;
	closeDialogOnClick: boolean;
};

type baseFieldStd = {
	htmlFor: string;
	id: string;
	type: typeOptions;
	label: string;
	placeholder?: string;
	autoComplete?: boolean;
};

type baseFieldSelect = {
	htmlFor: string;
	id: string;
	type: "select";
	options: string[];
	label: string;
	placeholder?: string;
	autoComplete?: boolean;
};

type baseField = baseFieldStd | baseFieldSelect;

type baseDialog = {
	title: string;
	description: string;
	fields: Record<string, baseField>;
	closeButton: Record<string, baseCloseButton>;
};

const cancel: baseCloseButton = {
	text: "Cancel",
	variant: "ghost",
	onClick: () => {},
	closeDialogOnClick: true,
};

export type { baseDialog, baseField, baseCloseButton };
export { cancel };
