"use client";

import useWatchStore from "@/lib/store";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const { startFlow } = useWatchStore();
  return (
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
  );
}
