"use client";
import InfoSection from "@/components/InfoSection";
import VariantButtonGroup from "@/components/VariantButtonGroup";
import Watch from "@/components/Watch";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [startFlow, setStartFlow] = useState<boolean>(false);

  const getStarted = () => {
    setStartFlow(true);
  };

  return (
    <section>
      <div className="absolute top-[29px] px-8 flex items-center justify-between w-full gap-8">
        <Image src="/apple-watch-logo.png" alt="WATCH" width={90} height={0} />
        <button
          className={`text-[17px] tracking-tight leading-6 flex items-center gap-1 ${
            startFlow ? "opacity-100 visible " : "opacity-0 invisible"
          }`}
        >
          Collections
          <ChevronDown size={16} />
        </button>
        <button
          className={`bg-primary py-2 px-4 text-sm tracking-tight rounded-full text-white hover:bg-primaryhover 
            transition-opacity duration-500 ease-in-out delay-[1500ms] ${
              startFlow ? "opacity-100 visible" : "opacity-0 invisible"
            } `}
        >
          Save
        </button>
      </div>
      <section className="w-full h-[70vh] flex justify-center items-center flex-col text-left">
        <div
          className={`absolute top-[17%] visible z-[2] transition-opacity duration-500 ease-in-out delay-300 ${
            startFlow ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h1 className="flex flex-col">
            <span className="text-subtitle tracking-tighter leading-snug pb-[10px]">
              Apple Watch Studio
            </span>
            <span className="text-heading font-semibold tracking-tighest leading-none">
              Choose a case.
            </span>
            <span className="text-heading font-semibold tracking-tighest leading-none">
              Pick a band.
            </span>
            <span className="text-heading font-semibold tracking-tighest leading-none">
              Create your own style.
            </span>
          </h1>
          <button
            onClick={getStarted}
            className="bg-primary mt-11 py-2 px-[22px] min-w-[70px] text-[17px] tracking-tight rounded-full text-white hover:bg-primaryhover"
          >
            Get started
          </button>
        </div>
        <div
          className={`transform translate-y-[32rem] scale-[2] mt-48 ${startFlow && "transform-none transition-transform duration-[1200ms] ease-in-out delay-[400ms]"}`}
        >
          <Watch />
        </div>
      </section>
      <section
        className={`transition-opacity duration-500 ease-in-out delay-[1500ms] ${
          startFlow ? "opacity-100 visible " : "opacity-0 invisible"
        }`}
      >
        <InfoSection />
        <VariantButtonGroup />
      </section>
    </section>
  );
}
