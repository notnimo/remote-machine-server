type Machine = { 
  name: string

 };

const fetchRecent = (userId: string): Machine[] => {
  return [{ name: "Machine 1" }, { name: "Machine 2" }, { name: "Machine 3" }];
};

const fetchMachines = (userId: string): Machine[] => {
  return [{ name: "Machine 1" }, { name: "Machine 2" }, { name: "Machine 3" }];
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

export type { Machine };
export {
  fetchMachines,
  fetchRecent,
  deleteMachine,
  connectMachine,
  addMachine,
  updateMachine,
  registerMachine,
};
