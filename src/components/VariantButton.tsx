"use client";
import { Customization, CustomizationOption } from "@/data/variants";
import useWatchStore, { Variant } from "@/lib/store";
import { findFirstVariant, getSelectedCollectionData } from "@/utils/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function VariantButton({ item }: { item: Customization }) {
  const {
    selectedCustomizationTypeId,
    setSelectedCustomizationTypeId,
    setSelectedCustomizationId,
    selectedVariant,
    goToSlide,
    selectedCollectionId,
  } = useWatchStore();

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedCustomizationTypeId === item.id) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1100); // Match the animation duration
      return () => clearTimeout(timer); // Cleanup timer on unmount or type change
    }
  }, [selectedCustomizationTypeId, item.id]);

  const data = getSelectedCollectionData(selectedCollectionId);

  const selectCustomizationType = () => {
    if (selectedCustomizationTypeId === item.id) return;
    setSelectedCustomizationTypeId(item.id);

    // Reset the selected customization id to the option having the default property as true
    setSelectedCustomizationId(
      item.options.find((option) => option.default)?.id || 0,
    );
  };

  const selectOptionHandler = (option: CustomizationOption) => {
    const firstVariant = findFirstVariant(
      option.name,
      item.id,
      selectedCollectionId,
    );
    goToSlide(firstVariant.id - 1);

    setSelectedCustomizationId(option.id);
  };

  const checkCurrentOption = (option: CustomizationOption): boolean => {
    const key = item.name as keyof Variant;
    const variantIndex = selectedVariant[key] || 0;
    const currentVariant = data[item.id - 1].variants[variantIndex];
    return option.name === currentVariant.type;
  };

  return (
    <fieldset
      onClick={selectCustomizationType}
      className="flex items-end gap-2 bg-[#e8e8ed] py-3 px-6 rounded-full cursor-pointer"
    >
      <Image
        src={item.image}
        alt="product image"
        width={0}
        height={0}
        className="h-full w-auto"
      />
      <ul
        className={`flex gap-4 transition-all ${
          isAnimating ? "animate-openoptions" : ""
        }`}
      >
        {item.options && selectedCustomizationTypeId === item.id ? (
          item.options.map((option: CustomizationOption) => (
            <li
              className={`transition-all whitespace-nowrap ${checkCurrentOption(option) ? "font-semibold" : ""}`}
              onClick={() => selectOptionHandler(option)}
              key={option.id}
            >
              {option.name}
            </li>
          ))
        ) : (
          <li>{item.name}</li>
        )}
      </ul>
    </fieldset>
  );
}
