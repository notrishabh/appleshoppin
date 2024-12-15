// Interface for slide for each customization type
export interface CustomizationVariants {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
}

// Interface for the Options inside each Variant
export interface CustomizationOption {
  id: number;
  name: string;
  default?: boolean;
}

// Main Variant interface
export interface Customization {
  id: number;
  name: string;
  image: string;
  options: CustomizationOption[];
  variants: CustomizationVariants[];
}

// Data for Variants
const data: Customization[] = [
  {
    id: 1,
    name: "Size",
    image: "/size-icon.svg",
    options: [
      {
        id: 1,
        name: "42mm",
      },
      {
        id: 2,
        name: "46mm",
        default: true,
      },
    ],
    variants: [
      {
        id: 1,
        name: "42mm",
        type: "42mm",
        image: "/case/aluminium/face-1.png",
        price: 299,
      },
      {
        id: 2,
        name: "46mm",
        type: "46mm",
        image: "/case/aluminium/face-1.png",
        price: 299,
      },
    ],
  },
  {
    id: 2,
    name: "Case",
    image: "/case-icon.svg",
    options: [
      {
        id: 1,
        name: "Aluminum",
        default: true,
      },
      {
        id: 2,
        name: "Titanium",
      },
    ],
    variants: [
      {
        id: 1,
        name: "Aluminium Face 1",
        type: "Aluminum",
        image: "/case/aluminium/face-1.png",
        price: 299,
      },
      {
        id: 2,
        name: "Aluminium Face 2",
        type: "Aluminum",
        image: "/case/aluminium/face-2.png",
        price: 299,
      },
      {
        id: 3,
        name: "Aluminium Face 3",
        type: "Aluminum",
        image: "/case/aluminium/face-3.png",
        price: 299,
      },
      {
        id: 4,
        name: "Titanium Face 4",
        type: "Titanium",
        image: "/case/titanium/face-1.png",
        price: 299,
      },
      {
        id: 5,
        name: "Titanium Face 5",
        type: "Titanium",
        image: "/case/titanium/face-2.png",
        price: 299,
      },
      {
        id: 6,
        name: "Titanium Face 6",
        type: "Titanium",
        image: "/case/titanium/face-3.png",
        price: 299,
      },
    ],
  },
  {
    id: 3,
    name: "Band",
    image: "/band-icon.svg",
    options: [
      { id: 1, name: "Stainless Steel" },
      { id: 2, name: "Sport Loop" },
      { id: 3, name: "Sport Band" },
      { id: 4, name: "FineWoven" },
      { id: 5, name: "Braided Solo Loop" },
      { id: 6, name: "Solo Loop", default: true },
      { id: 7, name: "Nike Sport Loop" },
      { id: 8, name: "Nike Sport Band" },
    ],
    variants: [
      {
        id: 1,
        name: "42mm",
        type: "42mm",
        image: "/case/aluminium/face-1.png",
        price: 299,
      },
      {
        id: 2,
        name: "46mm",
        type: "46mm",
        image: "/case/aluminium/face-1.png",
        price: 299,
      },
    ],
  },
];

export default data;
