export type Category = {
  id: string;
  name: string;
  items: {
    id: string;
    name: string;
    description?: string;
    priceCents: number;
    imageUrl?: string;
    isAvailable?: boolean;
  }[];
};

export const MENU: Category[] = [
  {
    id: "cat-starters",
    name: "Starters",
    items: [
      { id: "it-tikka", name: "Chicken Tikka", description: "Smoky & tender", priceCents: 24900 },
      { id: "it-paneer", name: "Paneer Tikka", description: "Veg classic", priceCents: 19900 },
    ],
  },
  {
    id: "cat-mains",
    name: "Mains",
    items: [
      { id: "it-butter-chicken", name: "Butter Chicken", priceCents: 34900 },
      { id: "it-dal-makhani", name: "Dal Makhani", priceCents: 22900 },
      { id: "it-biryani", name: "Chicken Biryani", priceCents: 29900 },
    ],
  },
  {
    id: "cat-drinks",
    name: "Drinks",
    items: [
      { id: "it-lassi", name: "Sweet Lassi", priceCents: 9900 },
      { id: "it-masala-soda", name: "Masala Soda", priceCents: 7900 },
    ],
  },
];
