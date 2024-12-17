import { COLLECTIONS } from "@/data/variants";
import useWatchStore from "@/lib/store";
import { calculatePrice, getWatchFullName } from "@/utils/utils";

export default function InfoSection() {
  const {
    showSideView,
    toggleSideView,
    selectedVariant,
    selectedCollectionId,
  } = useWatchStore();

  return (
    <div className="w-[60%] mx-auto text-center md:pt-[4vh] flex flex-col gap-2">
      {showSideView ? (
        <span
          role="button"
          tabIndex={0}
          aria-label="Switch to front view"
          onClick={() => toggleSideView(false)}
          className="underline cursor-pointer text-primary text-xs tracking-tighter"
        >
          Front view
        </span>
      ) : (
        <span
          role="button"
          tabIndex={0}
          aria-label="Switch to side view"
          onClick={() => toggleSideView(true)}
          className="underline cursor-pointer text-primary text-xs tracking-tighter"
        >
          Side view
        </span>
      )}
      <span
        id="watch-type"
        aria-label={COLLECTIONS[selectedCollectionId].name}
        className="uppercase text-[#6e6e73] font-semibold text-xs tracking-tighter"
      >
        {COLLECTIONS[selectedCollectionId].name}
      </span>
      <span
        aria-live="polite"
        className="font-semibold text-sm tracking-tighter"
      >
        {getWatchFullName(selectedVariant, selectedCollectionId)}
      </span>
      <span aria-live="polite" className="text-sm tracking-tighter">
        From ${calculatePrice(selectedVariant, selectedCollectionId)}
      </span>
    </div>
  );
}
