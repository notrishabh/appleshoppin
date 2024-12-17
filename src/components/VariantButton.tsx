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
    startFlow,
  } = useWatchStore();

  const data = getSelectedCollectionData(selectedCollectionId);

  const [isAnimating, setIsAnimating] = useState(false);

  // Automatic animation on render of variant button group
  useEffect(() => {
    if (item.id === 1 && startFlow) {
      const timer = setTimeout(() => {
        setIsAnimating(true); // Start animation after 2500ms
        const resetTimer = setTimeout(() => setIsAnimating(false), 1750); // Reset animation after 1750ms
        return () => clearTimeout(resetTimer);
      }, 2500);

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [item.id, startFlow]);

  // On click animation after selecting customization
  useEffect(() => {
    if (selectedCustomizationTypeId === item.id) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1100); // Match the animation duration
      return () => clearTimeout(timer); // Cleanup timer on unmount or type change
    }
  }, [selectedCustomizationTypeId, item.id]);

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

  const animationClass = isAnimating
    ? item.id === 1
      ? "animate-expandAndCollapse"
      : "animate-openoptions"
    : "";

  const renderOptions = () => {
    return item.options.map((option: CustomizationOption) => (
      <li
        className={`transition-all whitespace-nowrap ${
          checkCurrentOption(option) ? "font-semibold" : ""
        }`}
        onClick={() => selectOptionHandler(option)}
        key={option.id}
      >
        {option.name}
      </li>
    ));
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
      <ul className={`flex gap-4 transition-all ${animationClass}`}>
        {item.options &&
        (isAnimating || selectedCustomizationTypeId === item.id) ? (
          renderOptions()
        ) : (
          <li>{item.name}</li>
        )}
      </ul>
    </fieldset>
  );
}
