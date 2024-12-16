import data, { CustomizationVariants } from "@/data/variants";

import { Variant } from "@/lib/store";

export const getCases = (): CustomizationVariants[] => {
  return data[1].variants;
};

export const getBands = (): CustomizationVariants[] => {
  return data[2].variants;
};

export const getWatchFullName = (selectedVariant: Variant): string => {
  const caseName = data[1].variants[selectedVariant.Case]?.name;
  const bandName = data[2].variants[selectedVariant.Band]?.name;
  return "46mm " + caseName + " with " + bandName;
};
