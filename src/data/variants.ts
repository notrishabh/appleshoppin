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
        price: 399,
      },
      {
        id: 2,
        name: "46mm",
        type: "46mm",
        image: "/case/aluminium/face-1.png",
        price: 429,
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
        name: "Silver Aluminum Case",
        type: "Aluminum",
        image: "/case/aluminium/face-1.png",
        price: 0,
      },
      {
        id: 2,
        name: "Rose Gold Aluminum Case",
        type: "Aluminum",
        image: "/case/aluminium/face-2.png",
        price: 0,
      },
      {
        id: 3,
        name: "Black Aluminum Case",
        type: "Aluminum",
        image: "/case/aluminium/face-3.png",
        price: 0,
      },
      {
        id: 4,
        name: "Natural Titanium Case",
        type: "Titanium",
        image: "/case/titanium/face-1.png",
        price: 300,
      },
      {
        id: 5,
        name: "Gold Titanium Case",
        type: "Titanium",
        image: "/case/titanium/face-2.png",
        price: 300,
      },
      {
        id: 6,
        name: "Slate Titanium Case",
        type: "Titanium",
        image: "/case/titanium/face-3.png",
        price: 300,
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
      // Stainless Steel - $50
      {
        id: 1,
        name: "Natural Milanese Loop",
        type: "Stainless Steel",
        image: "/band/ss-1.jpg",
        price: 50,
      },
      {
        id: 2,
        name: "Gold Milanese Loop",
        type: "Stainless Steel",
        image: "/band/ss-2.jpg",
        price: 50,
      },
      {
        id: 3,
        name: "Slate Milanese Loop",
        type: "Stainless Steel",
        image: "/band/ss-3.jpg",
        price: 50,
      },
      {
        id: 4,
        name: "Natural Link Bracelet",
        type: "Stainless Steel",
        image: "/band/ss-4.jpg",
        price: 50,
      },
      {
        id: 5,
        name: "Gold Link Bracelet",
        type: "Stainless Steel",
        image: "/band/ss-5.jpg",
        price: 50,
      },
      {
        id: 6,
        name: "Slate Link Bracelet",
        type: "Stainless Steel",
        image: "/band/ss-6.jpg",
        price: 50,
      },

      // Sport Loop - $0
      {
        id: 7,
        name: "Ultramarine Sport Loop",
        type: "Sport Loop",
        image: "/band/spl-1.jpg",
        price: 0,
      },
      {
        id: 8,
        name: "Lake Green Sport Loop",
        type: "Sport Loop",
        image: "/band/spl-2.jpg",
        price: 0,
      },
      {
        id: 9,
        name: "Blue Cloud Sport Loop",
        type: "Sport Loop",
        image: "/band/spl-3.jpg",
        price: 0,
      },
      {
        id: 10,
        name: "Ink Sport Loop",
        type: "Sport Loop",
        image: "/band/spl-4.jpg",
        price: 0,
      },
      {
        id: 11,
        name: "Plum Sport Loop",
        type: "Sport Loop",
        image: "/band/spl-5.jpg",
        price: 0,
      },
      {
        id: 12,
        name: "Pride Edition Sport Loop",
        type: "Sport Loop",
        image: "/band/spl-6.jpg",
        price: 0,
      },
      {
        id: 13,
        name: "Black Unity Sport Loop",
        type: "Sport Loop",
        image: "/band/spl-7.jpg",
        price: 0,
      },

      // Sport Band - $0
      {
        id: 14,
        name: "Lake Green Sport Band",
        type: "Sport Band",
        image: "/band/sb-1.jpg",
        price: 0,
      },
      {
        id: 15,
        name: "Stone Gray Sport Band",
        type: "Sport Band",
        image: "/band/sb-2.jpg",
        price: 0,
      },
      {
        id: 16,
        name: "Starlight Sport Band",
        type: "Sport Band",
        image: "/band/sb-3.jpg",
        price: 0,
      },
      {
        id: 17,
        name: "Plum Sport Band",
        type: "Sport Band",
        image: "/band/sb-4.jpg",
        price: 0,
      },
      {
        id: 18,
        name: "Black Sport Band",
        type: "Sport Band",
        image: "/band/sb-5.jpg",
        price: 0,
      },
      {
        id: 19,
        name: "Denim Sport Band",
        type: "Sport Band",
        image: "/band/sb-6.jpg",
        price: 0,
      },
      {
        id: 20,
        name: "Light Blush Sport Band",
        type: "Sport Band",
        image: "/band/sb-7.jpg",
        price: 0,
      },
      {
        id: 21,
        name: "Pride Edition Sport Band",
        type: "Sport Band",
        image: "/band/sb-8.jpg",
        price: 0,
      },
      {
        id: 22,
        name: "Black Unity Sport Band - Unity Bloom",
        type: "Sport Band",
        image: "/band/sb-9.jpg",
        price: 0,
      },
      {
        id: 23,
        name: "Black Unity Sport Band",
        type: "Sport Band",
        image: "/band/sb-10.jpg",
        price: 0,
      },

      // FineWoven - $50
      {
        id: 24,
        name: "Black Magnetic Link",
        type: "FineWoven",
        image: "/band/fw-1.jpg",
        price: 50,
      },
      {
        id: 25,
        name: "Dark Taupe Magnetic Link",
        type: "FineWoven",
        image: "/band/fw-2.jpg",
        price: 50,
      },
      {
        id: 26,
        name: "Blackberry Magnetic Link",
        type: "FineWoven",
        image: "/band/fw-3.jpg",
        price: 50,
      },
      {
        id: 27,
        name: "Deep Blue Modern Buckle",
        type: "FineWoven",
        image: "/band/fw-4.jpg",
        price: 50,
      },
      {
        id: 28,
        name: "Dark Taupe Modern Buckle",
        type: "FineWoven",
        image: "/band/fw-5.jpg",
        price: 50,
      },
      {
        id: 29,
        name: "Chartreuse Modern Buckle",
        type: "FineWoven",
        image: "/band/fw-6.jpg",
        price: 50,
      },

      // Braided Solo Loop - $50
      {
        id: 30,
        name: "Lake Green Braided Solo Loop",
        type: "Braided Solo Loop",
        image: "/band/bs-1.jpg",
        price: 50,
      },
      {
        id: 31,
        name: "Midnight Braided Solo Loop",
        type: "Braided Solo Loop",
        image: "/band/bs-2.jpg",
        price: 50,
      },
      {
        id: 32,
        name: "Denim Braided Solo Loop",
        type: "Braided Solo Loop",
        image: "/band/bs-3.jpg",
        price: 50,
      },
      {
        id: 33,
        name: "Chartreuse Braided Solo Loop",
        type: "Braided Solo Loop",
        image: "/band/bs-4.jpg",
        price: 50,
      },
      {
        id: 34,
        name: "Magenta Braided Solo Loop",
        type: "Braided Solo Loop",
        image: "/band/bs-5.jpg",
        price: 50,
      },
      {
        id: 35,
        name: "Pride Edition Braided Solo Loop",
        type: "Braided Solo Loop",
        image: "/band/bs-6.jpg",
        price: 50,
      },
      {
        id: 36,
        name: "Black Unity Braided Solo Loop",
        type: "Braided Solo Loop",
        image: "/band/bs-7.jpg",
        price: 50,
      },

      // Solo Loop - $0
      {
        id: 37,
        name: "Star Fruit Solo Loop",
        type: "Solo Loop",
        image: "/band/sl-1.jpg",
        price: 0,
      },
      {
        id: 38,
        name: "Ultramarine Solo Loop",
        type: "Solo Loop",
        image: "/band/sl-2.jpg",
        price: 0,
      },
      {
        id: 39,
        name: "Lake Green Solo Loop",
        type: "Solo Loop",
        image: "/band/sl-3.jpg",
        price: 0,
      },
      {
        id: 40,
        name: "Black Solo Loop",
        type: "Solo Loop",
        image: "/band/sl-4.jpg",
        price: 0,
      },
      {
        id: 41,
        name: "Light Blush Solo Loop",
        type: "Solo Loop",
        image: "/band/sl-5.jpg",
        price: 0,
      },

      // Nike Sport Loop - $0
      {
        id: 42,
        name: "Black/Blue Nike Sport Loop",
        type: "Nike Sport Loop",
        image: "/band/nsl-1.jpg",
        price: 0,
      },
      {
        id: 43,
        name: "Starlight/Pink Nike Sport Loop",
        type: "Nike Sport Loop",
        image: "/band/nsl-2.jpg",
        price: 0,
      },
      {
        id: 44,
        name: "Grey/Blue Nike Sport Loop",
        type: "Nike Sport Loop",
        image: "/band/nsl-3.jpg",
        price: 0,
      },
      {
        id: 45,
        name: "Green/Grey Nike Sport Loop",
        type: "Nike Sport Loop",
        image: "/band/nsl-4.jpg",
        price: 0,
      },
      {
        id: 46,
        name: "Blue/Red Nike Sport Loop",
        type: "Nike Sport Loop",
        image: "/band/nsl-5.jpg",
        price: 0,
      },

      // Nike Sport Band - $49
      {
        id: 47,
        name: "Volt Splash Nike Sport Band",
        type: "Nike Sport Band",
        image: "/band/nsb-1.jpg",
        price: 0,
      },
      {
        id: 48,
        name: "Magic Ember Nike Sport Band",
        type: "Nike Sport Band",
        image: "/band/nsb-2.jpg",
        price: 0,
      },
      {
        id: 0,
        name: "Midnight Sky Nike Sport Band",
        type: "Nike Sport Band",
        image: "/band/nsb-3.jpg",
        price: 0,
      },
      {
        id: 50,
        name: "Pure Platinum Nike Sport Band",
        type: "Nike Sport Band",
        image: "/band/nsb-4.jpg",
        price: 0,
      },
      {
        id: 51,
        name: "Desert Stone Nike Sport Band",
        type: "Nike Sport Band",
        image: "/band/nsb-5.jpg",
        price: 0,
      },
      {
        id: 52,
        name: "Cargo Khaki Nike Sport Band",
        type: "Nike Sport Band",
        image: "/band/nsb-6.jpg",
        price: 0,
      },
      {
        id: 53,
        name: "Blue Flame Nike Sport Band",
        type: "Nike Sport Band",
        image: "/band/nsb-7.jpg",
        price: 0,
      },
    ],
  },
];

export default data;
