"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper-styles.css";

import { Navigation, Keyboard } from "swiper/modules";
import useWatchStore, { Variant } from "@/lib/store";
import { CustomizationVariants } from "@/data/variants";
import data from "@/data/variants";
import { Swiper as SwiperCore } from "swiper";
import { useMemo } from "react";

export default function SwiperCarousel({
  slides,
}: {
  slides: CustomizationVariants[];
}) {
  const {
    setSwiperInstance,
    setSelectedVariant,
    selectedVariant,
    selectedCustomizationTypeId,
  } = useWatchStore();

  const onSlideChange = (swiper: SwiperCore) => {
    const x = data[selectedCustomizationTypeId - 1].name;
    setSelectedVariant(x as keyof Variant, swiper.activeIndex);
  };

  const initialSlide = useMemo(() => {
    const key = data[selectedCustomizationTypeId - 1]?.name;
    return selectedVariant[key as keyof Variant] || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCustomizationTypeId]);

  return (
    <div className="h-[52vh]">
      <Swiper
        onSwiper={setSwiperInstance}
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
        {slides.map((slide: CustomizationVariants) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image}
              alt={slide.name}
              width="0"
              height="0"
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
