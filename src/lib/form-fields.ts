function foo(ciao: string) {
	return ciao;
}

type baseDialog = {
	title: string;
	description: string;
	fields: object;
	closeButton: "standard" | object;
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
