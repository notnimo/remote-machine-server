// placeholders

type Routine = {};
type File_c = {};

const getUserId = () => {
  return "user_12345";
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

export type { Routine, File_c };

export {
  getUserId,
  registerUser,
  updateUser,
  logUserOut,
  programRoutine,
  transferFile,
};
