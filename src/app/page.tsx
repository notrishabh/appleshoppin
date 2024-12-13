import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="absolute top-[29px] left-8">
        <Image src="/apple-watch-logo.png" alt="WATCH" width={90} height={0} />
      </div>
      <section className="h-[70vh] flex justify-center items-center flex-col text-left">
        <div className="absolute top-[17%] z-[2]">
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
          <button className="bg-primary mt-11 py-2 px-[22px] min-w-[70px] text-[17px] tracking-tight rounded-full text-white hover:bg-primaryhover">
            Get started
          </button>
        </div>
        <div className="transform translate-y-[32rem] scale-[2] mt-48">
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
