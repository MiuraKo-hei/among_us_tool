import { useSelector } from "react-redux";
import { Event } from "./types";

const useEvents = (): Event[] => useSelector((state) => state.event.events);

const useResetCounter = (): number =>
  useSelector((state) => state.event.resetCounter);

export { useEvents, useResetCounter };
