import {
  Customization,
  CustomizationVariants,
  HERMES,
  SE,
  SERIES10,
} from "@/data/variants";

import { Variant } from "@/lib/store";

export const getWatchFullName = (
  selectedVariant: Variant,
  selectedCollectionId: number,
): string => {
  const data = getSelectedCollectionData(selectedCollectionId);
  const sizeName = data[0].variants[selectedVariant.Size]?.name;
  const caseName = data[1].variants[selectedVariant.Case]?.name;
  const bandName = data[2].variants[selectedVariant.Band]?.name;
  return sizeName + " " + caseName + " with " + bandName;
};

export const findFirstVariant = (
  customizationName: string,
  customizationTypeId: number,
  selectedCollectionId: number,
): CustomizationVariants => {
  {
    const data = getSelectedCollectionData(selectedCollectionId);

    return (
      data[customizationTypeId - 1].variants.find(
        (v: CustomizationVariants) => v.type === customizationName,
      ) || data[customizationTypeId - 1].variants[0]
    );
  }
};

export const calculatePrice = (
  selectedVariant: Variant,
  selectedCollectionId: number,
) => {
  const data = getSelectedCollectionData(selectedCollectionId);
  const sizeDetails = data[0].variants[selectedVariant.Size];
  const caseDetails = data[1].variants[selectedVariant.Case];
  const bandDetails = data[2].variants[selectedVariant.Band];

  return sizeDetails.price + caseDetails.price + bandDetails.price;
};

export const getSelectedCollectionData = (
  selectedCollectionId: number,
): Customization[] => {
  // Map of collection data
  const collectionMap = new Map<number, Customization[]>([
    [0, SERIES10],
    [1, HERMES],
    [2, SE],
  ]);

  return collectionMap.get(selectedCollectionId) || SERIES10;
};
