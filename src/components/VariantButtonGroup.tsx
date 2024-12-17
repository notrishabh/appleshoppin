import { getSelectedCollectionData } from "@/utils/utils";
import VariantButton from "./VariantButton";
import useWatchStore from "@/lib/store";

export default function VariantButtonGroup() {
  const { selectedCollectionId } = useWatchStore();
  const data = getSelectedCollectionData(selectedCollectionId);
  return (
    <div role="group" className="mt-8 w-full flex-nowrap overflow-x-auto">
      <div
        role="group"
        className="flex gap-2 justify-center items-center mt-8 w-max mx-auto"
      >
        {data.map((item) => (
          <VariantButton key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
