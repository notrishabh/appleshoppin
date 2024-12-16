import useWatchStore from "@/lib/store";
import { getWatchFullName } from "@/utils/utils";

export default function InfoSection() {
  const { showSideView, toggleSideView, selectedVariant } = useWatchStore();

  return (
    <div className="w-[60%] mx-auto text-center pt-[4vh] flex flex-col gap-2">
      {showSideView ? (
        <span
          onClick={() => toggleSideView(false)}
          className="underline cursor-pointer text-primary text-xs tracking-tighter"
        >
          Front view
        </span>
      ) : (
        <span
          onClick={() => toggleSideView(true)}
          className="underline cursor-pointer text-primary text-xs tracking-tighter"
        >
          Side view
        </span>
      )}
      <span className="uppercase text-[#6e6e73] font-semibold text-xs tracking-tighter">
        Apple Watch Series 10
      </span>
      <span className="font-semibold text-sm tracking-tighter">
        {getWatchFullName(selectedVariant)}
      </span>
      <span className="text-sm tracking-tighter">From $429</span>
    </div>
  );
}
