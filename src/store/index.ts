import { AppStoreBase, AppStoreStates } from "./type";
import { create } from "zustand";
import { createSelectorFunctions } from "auto-zustand-selectors-hook";

const apStates: AppStoreStates = {
  services: [],
};
const useAppStoreBase = create<AppStoreBase>((setState) => ({
  ...apStates,
  setServices: (services) => {
    setState((state) => ({ ...state, services }));
  },
}));

export const useAppStore = createSelectorFunctions(useAppStoreBase);
