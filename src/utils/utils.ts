import data, { CustomizationVariants } from "@/data/variants";

export const getCases = (): CustomizationVariants[] => {
  return data[1].variants;
};

export const getBands = (): CustomizationVariants[] => {
  return data[2].variants;
};
