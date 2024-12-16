import data, { CustomizationVariants } from "@/data/variants";

import { Variant } from "@/lib/store";

export const getCases = (): CustomizationVariants[] => {
  return data[1].variants;
};

export const getBands = (): CustomizationVariants[] => {
  return data[2].variants;
};

export const getWatchFullName = (selectedVariant: Variant): string => {
  const sizeName = data[0].variants[selectedVariant.Size]?.name;
  const caseName = data[1].variants[selectedVariant.Case]?.name;
  const bandName = data[2].variants[selectedVariant.Band]?.name;
  return sizeName + " " + caseName + " with " + bandName;
};

export const findFirstVariant = (
  customizationName: string,
  customizationTypeId: number,
): CustomizationVariants => {
  return (
    data[customizationTypeId - 1].variants.find(
      (v) => v.type === customizationName,
    ) || data[customizationTypeId - 1].variants[0]
  );
};

export const calculatePrice = (selectedVariant: Variant) => {
  const sizeDetails = data[0].variants[selectedVariant.Size];
  const caseDetails = data[1].variants[selectedVariant.Case];
  const bandDetails = data[2].variants[selectedVariant.Band];

  return sizeDetails.price + caseDetails.price + bandDetails.price;
};
