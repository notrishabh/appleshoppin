"use client";
import { Customization, CustomizationOption } from "@/data/variants";
import useWatchStore from "@/lib/store";
import { findFirstVariant } from "@/utils/utils";
import Image from "next/image";

export default function VariantButton({ item }: { item: Customization }) {
  const {
    selectedCustomizationTypeId,
    setSelectedCustomizationTypeId,
    selectedCustomizationId,
    setSelectedCustomizationId,
    goToSlide,
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
    const firstVariant = findFirstVariant(option.name, item.id);
    goToSlide(firstVariant.id - 1);

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
