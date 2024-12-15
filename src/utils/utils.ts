import data, { CustomizationVariants } from "@/data/variants";

export const getCases = (): CustomizationVariants[] => {
  return data[1].variants;
};
