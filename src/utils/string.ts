import uniqueId from "lodash-es/uniqueId";

export const getUniqueId = (): string => {
  const LENGTH = 8;
  const SOURCE =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < LENGTH; i++) {
    result += SOURCE[Math.floor(Math.random() * SOURCE.length)];
  }
  return uniqueId(`${result}-`);
};
