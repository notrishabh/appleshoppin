import data from "@/data/variants";
import VariantButton from "./VariantButton";

export default function VariantButtonGroup() {
  return (
    <div className="flex gap-2 justify-center items-center mt-8">
      {data.map((item) => (
        <VariantButton key={item.id} item={item} />
      ))}
    </div>
  );
}
