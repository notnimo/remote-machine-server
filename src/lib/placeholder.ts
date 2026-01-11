// placeholders functions

const fetchRecent = (userId: string): string[] => {
	return ["machine_1", "machine_2", "machine_3"];
};

const fetchMachines = (userId: string): string[] => {
	return ["machine_1", "machine_2", "machine_3"];
};

const getUserId = () => {
	return "user_12345";
};

const deleteMachine = (machineId: string, userId: string): boolean => {
	return true;
};

const connectMachine = (machineId: string, userId: string): boolean => {
	return true;
};

const addMachine = (
	machineId: string,
	machinePassword: string,
	userId: string
): boolean => {
	return true;
};

const updateMachine = (
	machineId: string,
	newDetails: any,
	userId: string
): boolean => {
	return true;
};

const registerMachine = (machineDetails: any, userId: string): boolean => {
	return true;
};

const registerUser = (userDetails: any): string => {
	return "user_12345";
};

const updateUser = (userId: string, newDetails: any): boolean => {
	return true;
};

export {
	getUserId,
	fetchMachines,
	fetchRecent,
	deleteMachine,
	connectMachine,
	addMachine,
	updateMachine,
	registerMachine,
	registerUser,
	updateUser,
};
