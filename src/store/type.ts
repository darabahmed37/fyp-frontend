import { IServices } from "../utils/types";

export interface AppStoreStates {
  services: IServices[];
}

interface AppStoreActions {
  setServices: (services: IServices[]) => void;
}

export type AppStoreBase = AppStoreStates & AppStoreActions;
