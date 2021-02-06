import { RootState } from "../../src/modules";

declare module "react-redux" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}
