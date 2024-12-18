import useWatchStore from "@/lib/store";
import Image from "next/image";
import CollectionsDropdown from "./CollectionsDropdown";
import SaveButton from "./SaveButton";

export default function Header() {
  const { startFlow } = useWatchStore();
  return (
    <div className="absolute top-[29px] px-8 flex items-center justify-between w-full gap-8">
      <Image
        role="img"
        aria-label="Apple Watch Logo"
        src="/apple-watch-logo.png"
        alt="Apple Watch logo"
        width={90}
        height={0}
      />
      <div
        aria-live="polite"
        aria-hidden={!startFlow}
        className={`${startFlow ? "visible " : "invisible"}`}
      >
        <CollectionsDropdown />
      </div>
      <div
        className={`transition-opacity duration-500 ease-in-out delay-[1500ms] ${
          startFlow ? "opacity-100 visible" : "opacity-0 invisible"
        } `}
      >
        <SaveButton />
      </div>
    </div>
  );
}
