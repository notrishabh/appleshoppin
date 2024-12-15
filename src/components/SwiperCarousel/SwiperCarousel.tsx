"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper-styles.css";

import { Navigation, Keyboard } from "swiper/modules";
import useWatchStore from "@/lib/store";
import { Options } from "@/data/variants";

export default function SwiperCarousel({ slides }: { slides: Options[] }) {
  const { setSwiperInstance } = useWatchStore();

  return (
    <div className="h-[51vh]">
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
        slideToClickedSlide={true}
      >
        {slides.map((slide: Slide) => (
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
