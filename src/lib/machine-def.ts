type Machine = {
  id: string;
  name: string; // add as field when registering machine
  owner: string;
  status: string;
  accessLevel: string;
};

const sampleMachine: Machine[] = [
  // Sample machine data; real data will be fetched from database
  {
    id: "machine-1",
    name: "Machine 1",
    owner: "user-1",
    status: "online",
    accessLevel: "admin",
  },
];

const fetchRecent = (userId: string): Machine[] => {
  return sampleMachine;
};

const fetchMachines = (userId: string): Machine[] => {
  return sampleMachine;
};

const deleteMachine = (machine: Machine, userId: string): boolean => {
  return true;
};

const connectMachine = (machine: Machine, userId: string): boolean => {
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

const getMachine = (machineId: string): Machine => {
  return (
    sampleMachine.find((machine) => machine.id === machineId) ||
    sampleMachine[0]
  );
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
  getMachine,
};
