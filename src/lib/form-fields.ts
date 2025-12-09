function foo(ciao: string) {
	return ciao;
}

type baseDialog = {
	title: string;
	description: string;
	fields: Record<string, baseField>;
	closeButton: "standard" | object;
};

type baseField = {
	htmlFor: string;
	id: string;
	name: string;
	type: any;
	placeholder?: string;
	autoComplete?: string;
};

const usernameField = {
	func: foo,
};

const passwordField = {};

const idField = {};

const machinePasswordField = {};

const ipField = {};

const accessLevelField = {};

console.log(usernameField["func"]("cacca"));

export {
	usernameField,
	passwordField,
	idField,
	machinePasswordField,
	ipField,
	accessLevelField,
};
