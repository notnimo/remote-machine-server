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

type baseField = {
	htmlFor: string;
	id: string;
	type: typeOptions;
	label: string;
	placeholder?: string;
	autoComplete?: boolean;
};

type baseDialog = {
	title: string;
	description: string;
	fields: Record<string, baseField>;
	closeButton: Record<string, baseCloseButton>;
};

export type { baseDialog, baseField, baseCloseButton };
