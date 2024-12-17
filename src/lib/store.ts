import { create } from "zustand";
import { Swiper as SwiperCore } from "swiper";

export interface Variant {
  Size: number;
  Case: number;
  Band: number;
}

interface WatchStore {
  //Get started
  startFlow: boolean;
  setStartFlow: (arg0: boolean) => void;
  selectedCollection: number;
  setSelectedCollection: (arg0: number) => void;

  // Watch side view state
  showSideView: boolean;
  toggleSideView: (arg0: boolean) => void;

  // Watch customization state
  selectedCustomizationTypeId: number;
  setSelectedCustomizationTypeId: (arg0: number) => void;
  selectedCustomizationId: number;
  setSelectedCustomizationId: (arg0: number) => void;
  selectedVariant: Variant;
  setSelectedVariant: (key: keyof Variant, value: number) => void;

  // Swiper carousel state
  swiperInstance: SwiperCore | null;
  setSwiperInstance: (swiper: SwiperCore) => void;
  goToSlide: (index: number) => void;
}

const useWatchStore = create<WatchStore>((set, get) => ({
  // Get started
  startFlow: false,
  setStartFlow: (arg0) => set(() => ({ startFlow: arg0 })),
  selectedCollection: 0,
  setSelectedCollection: (arg0) => set(() => ({ selectedCollection: arg0 })),

  // Side view
  showSideView: false,
  toggleSideView: (arg0) => set(() => ({ showSideView: arg0 })),

  // Watch customization state
  selectedCustomizationTypeId: 0,
  setSelectedCustomizationTypeId: (arg0) =>
    set(() => ({ selectedCustomizationTypeId: arg0 })),
  selectedCustomizationId: 0,
  setSelectedCustomizationId: (arg0) =>
    set(() => ({ selectedCustomizationId: arg0 })),
  selectedVariant: {
    Size: 1, // default size
    Case: 2, // default case
    Band: 39, // default band
  },
  setSelectedVariant: (key, value) =>
    set((state) => ({
      selectedVariant: { ...state.selectedVariant, [key]: value },
    })),

  // Swiper carousel logic
  swiperInstance: null,
  setSwiperInstance: (swiper) => set({ swiperInstance: swiper }),
  goToSlide: (index) => {
    const swiper = get().swiperInstance;
    if (swiper) {
      swiper.slideTo(index, 500);
    }
  },
}));

export default useWatchStore;
