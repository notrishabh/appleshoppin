import useWatchStore from "@/lib/store";
import Image from "next/image";
import { getSelectedCollectionData } from "@/utils/utils";
import SwiperCarousel from "./SwiperCarousel/SwiperCarousel";
import { useEffect, useMemo, useState } from "react";
import SizeCarousel from "./SwiperCarousel/SizeCarousel";

export default function Watch() {
  const {
    showSideView,
    toggleSideView,
    selectedCustomizationTypeId,
    selectedVariant,
    selectedCollectionId,
    startFlow,
  } = useWatchStore();

  const data = getSelectedCollectionData(selectedCollectionId);
  const cases = useMemo(() => data[1].variants, [data]);
  const bands = useMemo(() => data[2].variants, [data]);

  const [transitionAnimate, setTransitionAnimate] = useState(false);

  // Trigger transition on selected collection change
  useEffect(() => {
    setTransitionAnimate(true);

    const timer = setTimeout(() => {
      setTransitionAnimate(false);
    }, 700); // Match the duration of the transition

    return () => clearTimeout(timer);
  }, [selectedCollectionId]);

  const selectedCase = useMemo(() => {
    return data[1].variants[selectedVariant.Case];
  }, [selectedVariant.Case, data]);

  const selectedBand = useMemo(() => {
    return data[2].variants[selectedVariant.Band];
  }, [selectedVariant.Band, data]);

  if (showSideView) {
    return (
      <Image
        src="/main-watch-side-view.jpg"
        alt="WATCH"
        width="0"
        height="0"
        sizes="100vw"
        className="w-[52vh] max-w-[500px] h-auto cursor-pointer"
        onClick={() => toggleSideView(false)}
      />
    );
  }

  if (selectedCustomizationTypeId === 1) {
    return <SizeCarousel />;
  }

  return (
    <div className="w-full flex items-center justify-center h-full">
      {selectedCustomizationTypeId === 2 ? (
        <div className="absolute left-0 w-full">
          <SwiperCarousel slides={cases} />
        </div>
      ) : (
        <Image
          src={selectedCase.image}
          alt={selectedCase.name}
          width="0"
          height="0"
          sizes="100vw"
          className={`absolute pointer-events-none ${selectedVariant.Size === 0 ? "w-[45vh]" : "w-[52vh]"} max-w-[550px] h-auto z-10 transition-opacity duration-200 ease-in-out ${startFlow && transitionAnimate ? "opacity-0" : "opacity-100"}`}
        />
      )}
      {selectedCustomizationTypeId === 3 ? (
        <div className="absolute left-0 w-full">
          <SwiperCarousel slides={bands} />
        </div>
      ) : (
        <Image
          src={selectedBand.image}
          alt={selectedBand.name}
          width="0"
          height="0"
          sizes="100vw"
          className={`${selectedVariant.Size === 0 ? "w-[45vh]" : "w-[52vh]"} max-w-[550px] h-auto transition-all duration-700 ease-in-out ${startFlow && transitionAnimate ? "translate-x-[15%] opacity-0" : "translate-x-0 opacity-100"}`}
        />
      )}
    </div>
  );
}
