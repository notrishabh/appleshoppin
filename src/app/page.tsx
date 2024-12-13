"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [startFlow, setStartFlow] = useState(false);
  const getStarted = () => {
    setStartFlow(true);
  };
  return (
    <section>
      <div className="absolute top-[29px] px-8 flex items-center justify-between w-full gap-8">
        <Image src="/apple-watch-logo.png" alt="WATCH" width={90} height={0} />
        <button
          className={`text-[17px] tracking-tight leading-6 ${
            startFlow
              ? "opacity-100 visible transition-opacity duration-[500ms] ease-in-out delay-300"
              : "opacity-0 invisible"
          }`}
        >
          Collections
        </button>
        <button
          className={`bg-primary py-2 px-[22px] min-w-[70px] text-[17px] tracking-tight rounded-full text-white hover:bg-primaryhover ${
            startFlow
              ? "opacity-100 visible transition-opacity duration-[500ms] ease-in-out delay-300"
              : "opacity-0 invisible"
          } `}
        >
          Save
        </button>
      </div>
      <section className="h-[70vh] flex justify-center items-center flex-col text-left">
        <div
          className={`absolute top-[17%] z-[2] opacity-100 transition-opacity duration-500 ease-in-out delay-300 ${
            startFlow && "opacity-0"
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
          <Image
            src="/main-watch-face.png"
            alt="WATCH"
            width="0"
            height="0"
            sizes="100vw"
            className="absolute w-[52vh] max-w-[500px] h-auto "
          />
          <Image
            src="/main-watch-band.jpg"
            alt="WATCH"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[52vh] max-w-[500px] h-auto"
          />
        </div>
      </section>
    </section>
  );
}
