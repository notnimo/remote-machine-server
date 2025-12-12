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

type dialogCloseButton = {
	text: string;
	variant: "standard" | "outline" | "ghost";
	type?: "submit";
	onClick?: never;
	closeDialogOnClick: true;
};

type onClickButton = {
	text: string;
	variant: "standard" | "outline" | "ghost";
	type?: "submit";
	onClick: () => void;
	closeDialogOnClick?: never;
};

type baseCloseButton = dialogCloseButton | onClickButton;

type baseField = {
	htmlFor: string;
	id: string;
	type: typeOptions;
	placeholder?: string;
	autoComplete?: string;
};

type baseDialog = {
	title: string;
	description: string;
	fields: Record<string, baseField>;
	closeButton: "standard" | Record<string, baseCloseButton>;
};

export type { baseDialog, baseField };
