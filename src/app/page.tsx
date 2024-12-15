"use client";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import VariantButtonGroup from "@/components/VariantButtonGroup";
import Watch from "@/components/Watch";
import useWatchStore from "@/lib/store";

export default function Home() {
  const { startFlow, setStartFlow } = useWatchStore();

  return (
    <section>
      <Header />
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
            onClick={() => setStartFlow(true)}
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
