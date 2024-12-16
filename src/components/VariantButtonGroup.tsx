import data from "@/data/variants";
import VariantButton from "./VariantButton";

export default function VariantButtonGroup() {
  return (
    <div className="mt-8 w-full flex-nowrap overflow-x-auto">
      <div className="flex gap-2 justify-center items-center mt-8 w-max mx-auto">
        {data.map((item) => (
          <VariantButton key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
