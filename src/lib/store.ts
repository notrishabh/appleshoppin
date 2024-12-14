import { create } from "zustand";

interface WatchStore {
  showSideView: boolean;
  toggleSideView: (arg0: boolean) => void;
  selectedCustomizationTypeId: number;
  setSelectedCustomizationTypeId: (arg0: number) => void;
  selectedCustomizationId: number;
  setSelectedCustomizationId: (arg0: number) => void;
}

const useWatchStore = create<WatchStore>((set) => ({
  showSideView: false,
  toggleSideView: (arg0) => set(() => ({ showSideView: arg0 })),
  selectedCustomizationTypeId: 0,
  setSelectedCustomizationTypeId: (arg0) =>
    set(() => ({ selectedCustomizationTypeId: arg0 })),
  selectedCustomizationId: 0,
  setSelectedCustomizationId: (arg0) =>
    set(() => ({ selectedCustomizationId: arg0 })),
}));

export default useWatchStore;
