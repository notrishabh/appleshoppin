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
  sideView?: string;
}

// Main Variant interface
export interface Customization {
  id: number;
  name: string;
  image: string;
  options: CustomizationOption[];
  variants: CustomizationVariants[];
}

export const COLLECTIONS: { id: number; name: string }[] = [
  {
    id: 0,
    name: "Apple Watch Series 10",
  },
  {
    id: 1,
    name: "Apple Watch Hermès Series 10",
  },
  {
    id: 2,
    name: "Apple Watch SE",
  },
];

// Data for Apple watch series 10 collection
export const SERIES10: Customization[] = [
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
        image: "",
        price: 399,
      },
      {
        id: 2,
        name: "46mm",
        type: "46mm",
        image: "",
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
        sideView: "/side-view/sac.jpg",
        default: true,
      },
      {
        id: 2,
        name: "Titanium",
        sideView: "/side-view/ntc.jpg",
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
      { id: 1, name: "Stainless Steel", sideView: "/side-view/ss.jpg" },
      { id: 2, name: "Sport Loop", sideView: "/side-view/spl.jpg" },
      { id: 3, name: "Sport Band", sideView: "/side-view/sb.jpg" },
      { id: 4, name: "FineWoven", sideView: "/side-view/fw.jpg" },
      { id: 5, name: "Braided Solo Loop", sideView: "/side-view/bsl.jpg" },
      {
        id: 6,
        name: "Solo Loop",
        default: true,
        sideView: "/side-view/sl.jpg",
      },
      { id: 7, name: "Nike Sport Loop", sideView: "/side-view/nsl.jpg" },
      { id: 8, name: "Nike Sport Band", sideView: "/side-view/nsb.jpg" },
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

// Data for Apple watch hermes series 10 collection
export const HERMES: Customization[] = [
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
        image: "",
        price: 1249,
      },
      {
        id: 2,
        name: "46mm",
        type: "46mm",
        image: "",
        price: 1299,
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
        name: "Titanium",
        sideView: "/side-view/hermtc.jpg",
        default: true,
      },
    ],
    variants: [
      {
        id: 1,
        name: "Silver Titanium Case",
        type: "Titanium",
        image: "/case/titanium/hermes-1.png",
        price: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Band",
    image: "/band-icon.svg",
    options: [
      { id: 1, name: "Hermès Toile H", sideView: "/side-view/hermth.jpg" },
      { id: 2, name: "Hermès Twill", sideView: "/side-view/hermtw.jpg" },
      { id: 3, name: "Hermès Torsade", sideView: "/side-view/hermto.jpg" },
      { id: 4, name: "Hermès Kilim", sideView: "/side-view/hermk.jpg" },
      {
        id: 5,
        name: "Hermès Grand H",
        default: true,
        sideView: "/side-view/hermtc.jpg",
      },
    ],
    variants: [
      {
        id: 1,
        name: "Gold/Écru Toile H Single Tour",
        type: "Hermès Toile H",
        image: "/band/hth-1.jpg",
        price: 0,
      },
      {
        id: 2,
        name: "Noir/Gold Twill Jump Attelage Single Tour",
        type: "Hermès Twill",
        image: "/band/htw-1.jpg",
        price: 0,
      },
      {
        id: 3,
        name: "Rouge Grenat/Vermillon Twill Jump Attelage Single Tour",
        type: "Hermès Twill",
        image: "/band/htw-2.jpg",
        price: 0,
      },
      {
        id: 4,
        name: "Navy Torsade Single Tour",
        type: "Hermès Torsade",
        image: "/band/hto-1.jpg",
        price: 0,
      },
      {
        id: 5,
        name: "Rouge Grenat Torsade Single Tour",
        type: "Hermès Torsade",
        image: "/band/hto-2.jpg",
        price: 0,
      },
      {
        id: 6,
        name: "Béton Kilim Single Tour",
        type: "Hermès Kilim",
        image: "/band/hk-1.jpg",
        price: 0,
      },
      {
        id: 7,
        name: "Noir Kilim Single Tour",
        type: "Hermès Kilim",
        image: "/band/hk-2.jpg",
        price: 0,
      },
      {
        id: 8,
        name: "Orange Kilim Single Tour",
        type: "Hermès Kilim",
        image: "/band/hk-3.jpg",
        price: 0,
      },
      {
        id: 9,
        name: "Bleu de France Kilim Single Tour",
        type: "Hermès Kilim",
        image: "/band/hk-4.jpg",
        price: 0,
      },
      {
        id: 10,
        name: "Vert Moyen Kilim Single Tour",
        type: "Hermès Kilim",
        image: "/band/hk-5.jpg",
        price: 0,
      },
      {
        id: 11,
        name: "Satiné Grand H",
        type: "Hermès Grand H",
        image: "/band/hgh-1.jpg",
        price: 650,
      },
    ],
  },
];

// Data for Apple watch hermes series 10 collection
export const SE: Customization[] = [
  {
    id: 1,
    name: "Size",
    image: "/size-icon.svg",
    options: [
      {
        id: 1,
        name: "40mm",
      },
      {
        id: 2,
        name: "44mm",
        default: true,
      },
    ],
    variants: [
      {
        id: 1,
        name: "40mm",
        type: "40mm",
        image: "",
        price: 249,
      },
      {
        id: 2,
        name: "44mm",
        type: "44mm",
        image: "",
        price: 279,
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
        sideView: "/side-view/seac.jpg",
      },
    ],
    variants: [
      {
        id: 1,
        name: "Midnight Aluminum Case",
        type: "Aluminum",
        image: "/case/aluminium/se-face-1.png",
        price: 0,
      },
      {
        id: 2,
        name: "Starlight Aluminum Case",
        type: "Aluminum",
        image: "/case/aluminium/se-face-2.png",
        price: 0,
      },
      {
        id: 3,
        name: "Silver Aluminum Case",
        type: "Aluminum",
        image: "/case/aluminium/se-face-3.png",
        price: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Band",
    image: "/band-icon.svg",
    options: [
      { id: 1, name: "Stainless Steel", sideView: "/side-view/ss.jpg" },
      { id: 2, name: "Sport Loop", sideView: "/side-view/spl.jpg" },
      { id: 3, name: "Sport Band", sideView: "/side-view/sb.jpg" },
      { id: 4, name: "FineWoven", sideView: "/side-view/fw.jpg" },
      { id: 5, name: "Braided Solo Loop", sideView: "/side-view/bsl.jpg" },
      {
        id: 6,
        name: "Solo Loop",
        default: true,
        sideView: "/side-view/sl.jpg",
      },
      { id: 7, name: "Nike Sport Loop", sideView: "/side-view/nsl.jpg" },
      { id: 8, name: "Nike Sport Band", sideView: "/side-view/nsb.jpg" },
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
