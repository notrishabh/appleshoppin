"use client";
import useWatchStore from "@/lib/store";
import Image from "next/image";

type CustomizationOption = {
  id: number;
  name: string;
  default?: boolean;
};

export type VariantButtonProps = {
  id: number;
  name: string;
  image: string;
  options: CustomizationOption[];
};

export default function VariantButton({ item }: { item: VariantButtonProps }) {
  const {
    selectedCustomizationTypeId,
    setSelectedCustomizationTypeId,
    selectedCustomizationId,
    setSelectedCustomizationId,
  } = useWatchStore();

  const selectCustomizationType = () => {
    if (selectedCustomizationTypeId === item.id) return;
    setSelectedCustomizationTypeId(item.id);

    // Reset the selected customization id to the option having the default property as true
    setSelectedCustomizationId(
      item.options.find((option) => option.default)?.id || 0,
    );
  };

  const selectOptionHandler = (option: CustomizationOption) => {
    setSelectedCustomizationId(option.id);
  };

  return (
    <div
      onClick={selectCustomizationType}
      className="flex items-end gap-4 bg-[#e8e8ed] py-3 px-6 rounded-full cursor-pointer"
    >
      <Image
        src={item.image}
        alt="product image"
        width={0}
        height={0}
        className="h-full w-auto"
      />
      {item.options && selectedCustomizationTypeId === item.id ? (
        item.options.map((option: CustomizationOption) => (
          <span
            className={`${option.id === selectedCustomizationId && item.id === selectedCustomizationTypeId && "font-semibold"}`}
            onClick={() => selectOptionHandler(option)}
            key={option.id}
          >
            {option.name}
          </span>
        ))
      ) : (
        <span>{item.name}</span>
      )}
    </div>
  );
}
