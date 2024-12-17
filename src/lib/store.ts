import { create } from "zustand";
import { Swiper as SwiperCore } from "swiper";

export interface Variant {
  Size: number;
  Case: number;
  Band: number;
}

const defaultVariant = new Map<number, Variant>([
  [
    0,
    {
      Size: 1,
      Case: 2,
      Band: 39,
    },
  ],
  [
    1,
    {
      Size: 1,
      Case: 0,
      Band: 0,
    },
  ],
  [
    2,
    {
      Size: 1,
      Case: 0,
      Band: 0,
    },
  ],
]);

interface WatchStore {
  //Get started
  startFlow: boolean;
  setStartFlow: (arg0: boolean) => void;
  selectedCollectionId: number;
  setSelectedCollectionId: (arg0: number) => void;

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
  selectedCollectionId: 0,
  setSelectedCollectionId: (arg0) =>
    set(() => ({
      selectedCollectionId: arg0,
      selectedVariant: defaultVariant.get(arg0),
    })),

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
