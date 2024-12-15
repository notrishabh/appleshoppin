import useWatchStore from "@/lib/store";
import Image from "next/image";
import { getCases } from "@/utils/utils";
import SwiperCarousel from "./SwiperCarousel/SwiperCarousel";
import { useMemo } from "react";

export default function Watch() {
  const { showSideView, toggleSideView, selectedCustomizationTypeId } =
    useWatchStore();

  const cases = useMemo(() => getCases(), []);

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

  return (
    <div className="w-full flex items-center h-full">
      {selectedCustomizationTypeId === 2 ? (
        <div className="absolute left-0 w-full">
          <SwiperCarousel slides={cases} />
        </div>
      ) : (
        <Image
          src="/main-watch-face.png"
          alt="WATCH"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute w-[52vh] max-w-[500px] h-auto"
        />
      )}
      <Image
        src="/main-watch-band.jpg"
        alt="WATCH"
        width="0"
        height="0"
        sizes="100vw"
        className="w-[52vh] max-w-[500px] h-auto"
      />
    </div>
  );
}
