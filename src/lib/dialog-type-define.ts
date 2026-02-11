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

const variantOptList = [
	"link",
	"default",
	"destructive",
	"outline",
	"secondary",
	"ghost",
] as const;
type variantOptions = (typeof variantOptList)[number];

type baseCloseButton = {
	text: string;
	variant: variantOptions;
	type?: "submit";
	onClick?: any; // to narrow dawn to a general event handler without problems
	closeDialogOnClick: boolean;
};

type baseFieldStd = {
	htmlFor: string;
	id: string;
	type: typeOptions;
	label: string;
	placeholder?: string;
	options?: null;
	selectPlaceholder?: null;
	autoComplete?: boolean;
};
type baseFieldSelect = {
	htmlFor: string;
	id: string;
	label: string;
	placeholder?: string;
	autoComplete?: boolean;
	type: "select";
	options: string[];
	selectPlaceholder?: string;
}
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
	closeDialogOnClick: true,
};

export type { baseDialog, baseField, baseCloseButton, baseFieldSelect };
export { cancel };
