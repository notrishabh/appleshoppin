import useWatchStore from "@/lib/store";
import Image from "next/image";
import { getBands, getCases } from "@/utils/utils";
import SwiperCarousel from "./SwiperCarousel/SwiperCarousel";
import { useMemo } from "react";
import data from "@/data/variants";
import SizeCarousel from "./SwiperCarousel/SizeCarousel";

export default function Watch() {
  const {
    showSideView,
    toggleSideView,
    selectedCustomizationTypeId,
    selectedVariant,
  } = useWatchStore();

  const cases = useMemo(() => getCases(), []);
  const bands = useMemo(() => getBands(), []);

  const selectedCase = useMemo(() => {
    return data[1].variants[selectedVariant.Case];
  }, [selectedVariant.Case]);

  const selectedBand = useMemo(() => {
    return data[2].variants[selectedVariant.Band];
  }, [selectedVariant.Band]);

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
          className={`absolute pointer-events-none ${selectedVariant.Size === 0 ? "w-[45vh]" : "w-[52vh]"} max-w-[550px] h-auto z-10`}
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
          className={`${selectedVariant.Size === 0 ? "w-[45vh]" : "w-[52vh]"} max-w-[550px] h-auto`}
        />
      )}
    </div>
  );
}
