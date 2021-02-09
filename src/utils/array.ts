export const isTruthy = <T>(item: T | undefined | void | null): item is T => {
  return Boolean(item);
};
