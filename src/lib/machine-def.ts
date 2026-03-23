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
  {
    id: "machine-2",
    name: "Machine 2",
    owner: "user-2",
    status: "offline",
    accessLevel: "user",
  },
  {
    id: "machine-3",
    name: "Machine 3",
    owner: "user-3",
    status: "online",
    accessLevel: "user",
  },
  {
    id: "machine-4",
    name: "Machine 4",
    owner: "user-4",
    status: "online",
    accessLevel: "user",
  },
  {
    id: "machine-5",
    name: "Machine 5",
    owner: "user-5",
    status: "offline",
    accessLevel: "user",
  },
  {
    id: "machine-6",
    name: "Machine 6",
    owner: "user-6",
    status: "online",
    accessLevel: "user",
  },
  {
    id: "machine-7",
    name: "Machine 7",
    owner: "user-7",
    status: "online",
    accessLevel: "user",
  },
  {
    id: "machine-8",
    name: "Machine 8",
    owner: "user-8",
    status: "online",
    accessLevel: "user",
  },
  {
    id: "machine-9",
    name: "Machine 9",
    owner: "user-9",
    status: "online",
    accessLevel: "user",
  },
  {
    id: "machine-10",
    name: "Machine 10",
    owner: "user-10",
    status: "online",
    accessLevel: "user",
  },
  {
    id: "machine-11",
    name: "Machine 11",
    owner: "user-11",
    status: "online",
    accessLevel: "user",
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
