import uuid from "node-uuid";
export const generateId = () => {
  return uuid.v4();
};
