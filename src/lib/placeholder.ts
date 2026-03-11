// placeholders

type Routine = {};
type File_c = {};
type Machine = { name: string };

const fetchRecent = (userId: string): Machine[] => {
  return [{ name: "Machine 1" }, { name: "Machine 2" }, { name: "Machine 3" }];
};

const fetchMachines = (userId: string): Machine[] => {
  return [{ name: "Machine 1" }, { name: "Machine 2" }, { name: "Machine 3" }];
};

const getUserId = () => {
  return "user_12345";
};

const deleteMachine = (machineId: Machine, userId: string): boolean => {
  return true;
};

const connectMachine = (machineId: Machine, userId: string): boolean => {
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

const logUserOut = (): boolean => {
  return true;
};

const programRoutine = (
  routine: Routine,
  userId: string,
  setFileAccepted: (open: boolean) => void
): boolean => {
  return true;
};

const transferFile = (
  routine: File_c,
  userId: string,
  setFileAccepted: (open: boolean) => void
): boolean => {
  return true;
};

export type { Routine, File_c, Machine };

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
  logUserOut,
  programRoutine,
  transferFile,
};
