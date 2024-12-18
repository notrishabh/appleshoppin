"use client";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import VariantButtonGroup from "@/components/VariantButtonGroup";
import Watch from "@/components/Watch";
import useWatchStore from "@/lib/store";

export default function Home() {
  const { startFlow, setStartFlow } = useWatchStore();

  return (
    <main>
      <Header />
      <section
        id="main-header"
        className="w-full h-[70vh] flex justify-center items-center flex-col text-left animate-fadeIn"
        role="region"
        aria-labelledby="section-header-title"
      >
        <div
          id="intro-text"
          role="contentinfo"
          className={`absolute top-[20%] visible z-[2] transition-opacity duration-500 ease-in-out delay-300 ${
            startFlow ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h1
            id="section-header-title"
            aria-live="polite"
            className="flex flex-col md:text-heading text-4xl font-sfdisplay font-semibold tracking-tighest"
          >
            <span className="md:text-subtitle text-lg font-normal tracking-tighter leading-snug pb-[10px]">
              Apple Watch Studio
            </span>
            <span className="leading-none">Choose a case.</span>
            <span className="leading-none">Pick a band.</span>
            <span className="leading-none">Create your own style.</span>
          </h1>
          <button
            aria-label="Start customizing your Apple Watch"
            onClick={() => setStartFlow(true)}
            className="bg-primary mt-11 py-2 px-[22px] min-w-[70px] text-[17px] tracking-tight rounded-full text-white hover:bg-primaryhover"
          >
            Get started
          </button>
        </div>
        <div
          className={`transform translate-y-[40vh] md:translate-y-[55vh] scale-[1.2] md:scale-[2] mt-48  ${startFlow && "transform-none md:transform-none transition-transform duration-[1200ms] ease-in-out delay-[400ms]"}`}
        >
          <Watch />
        </div>
      </section>
      <section
        aria-hidden={!startFlow}
        className={`transition-opacity duration-500 ease-in-out delay-[1500ms] pb-10 ${
          startFlow ? "opacity-100 visible " : "opacity-0 invisible"
        }`}
      >
        <InfoSection />
        <VariantButtonGroup />
      </section>
    </main>
  );
}
