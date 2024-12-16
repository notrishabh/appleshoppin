import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Keyboard, Navigation } from "swiper/modules";
import { useMemo } from "react";
import data from "@/data/variants";
import useWatchStore, { Variant } from "@/lib/store";
import { Swiper as SwiperCore } from "swiper";

export default function SizeCarousel() {
  const { selectedVariant, setSelectedVariant } = useWatchStore();

  const selectedCase = useMemo(() => {
    return data[1].variants[selectedVariant.Case];
  }, [selectedVariant.Case]);

  const selectedBand = useMemo(() => {
    return data[2].variants[selectedVariant.Band];
  }, [selectedVariant.Band]);

  const onSlideChange = (swiper: SwiperCore) => {
    const typeName = data[0].name;
    setSelectedVariant(typeName as keyof Variant, swiper.activeIndex);
  };

  const initialSlide = useMemo(() => {
    const key = data[0]?.name;
    return selectedVariant[key as keyof Variant] || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="absolute left-0 w-full">
        <div className="h-[52vh]">
          <Swiper
            slidesPerView={6.2}
            centeredSlides={true}
            spaceBetween={0}
            modules={[Navigation, Keyboard]}
            navigation={true}
            speed={500}
            keyboard={{
              enabled: true,
              onlyInViewport: false,
            }}
            initialSlide={initialSlide}
            slideToClickedSlide={true}
            onSlideChange={onSlideChange}
          >
            <SwiperSlide className="flex items-center justify-center">
              <Image
                src={selectedCase.image}
                alt={selectedCase.name}
                width="0"
                height="0"
                sizes="100vw"
                className="absolute w-[45vh] max-h-[45vh] h-auto z-10"
              />
              <Image
                src={selectedBand.image}
                alt={selectedBand.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[45vh] max-h-[45vh] h-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <Image
                src={selectedCase.image}
                alt={selectedCase.name}
                width="0"
                height="0"
                sizes="100vw"
                className="absolute w-[52vh] max-w-[550px] h-auto z-10"
              />
              <Image
                src={selectedBand.image}
                alt={selectedBand.name}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[52vh] max-w-[550px] h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
