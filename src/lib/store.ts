import { create } from "zustand";
import { Swiper as SwiperCore } from "swiper";

interface WatchStore {
  // Watch side view state
  showSideView: boolean;
  toggleSideView: (arg0: boolean) => void;

  // Watch customization state
  selectedCustomizationTypeId: number;
  setSelectedCustomizationTypeId: (arg0: number) => void;
  selectedCustomizationId: number;
  setSelectedCustomizationId: (arg0: number) => void;

  // Swiper carousel state
  swiperInstance: SwiperCore | null;
  setSwiperInstance: (swiper: SwiperCore) => void;
  goToSlide: (index: number) => void;
}

const useWatchStore = create<WatchStore>((set, get) => ({
  showSideView: false,
  toggleSideView: (arg0) => set(() => ({ showSideView: arg0 })),
  selectedCustomizationTypeId: 0,
  setSelectedCustomizationTypeId: (arg0) =>
    set(() => ({ selectedCustomizationTypeId: arg0 })),
  selectedCustomizationId: 0,
  setSelectedCustomizationId: (arg0) =>
    set(() => ({ selectedCustomizationId: arg0 })),

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
