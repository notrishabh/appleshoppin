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
    const typeName = data[selectedCustomizationTypeId - 1].name;
    setSelectedVariant(typeName as keyof Variant, swiper.activeIndex);
  };

  const initialSlide = useMemo(() => {
    const key = data[selectedCustomizationTypeId - 1]?.name;
    return selectedVariant[key as keyof Variant] || 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCustomizationTypeId]);

  return (
    <div className={`${selectedVariant.Size === 0 ? "h-[45vh]" : "h-[52vh]"}`}>
      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={1.75}
        centeredSlides={true}
        spaceBetween={10}
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
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 6.2,
          },
        }}
      >
        {slides.map((slide: CustomizationVariants) => (
          <SwiperSlide key={slide.id}>
            <Image
              className="swiper-slide-image"
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
