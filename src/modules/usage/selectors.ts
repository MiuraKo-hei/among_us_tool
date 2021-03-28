import { useSelector } from "react-redux";

const useOpen = (): boolean => useSelector((state) => state.usage.open);

export { useOpen };
