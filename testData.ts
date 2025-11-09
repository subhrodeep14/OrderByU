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
      {
        id: "it-tikka",
        name: "Chicken Tikka",
        description: "Smoky & tender grilled chicken pieces.",
        priceCents: 24900,
        imageUrl:
          "https://images.unsplash.com/photo-1633945274405-4c8e1b9b9a1a?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "it-paneer",
        name: "Paneer Tikka",
        description: "Soft cottage cheese cubes marinated with spices.",
        priceCents: 19900,
        imageUrl:
          "https://images.unsplash.com/photo-1601050690597-0e8f4b4b5a3c?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "cat-mains",
    name: "Mains",
    items: [
      {
        id: "it-butter-chicken",
        name: "Butter Chicken",
        description: "Creamy tomato gravy with tender chicken pieces.",
        priceCents: 34900,
        imageUrl:
          "https://images.unsplash.com/photo-1608138409131-1993762d3c52?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "it-dal-makhani",
        name: "Dal Makhani",
        description: "Slow-cooked black lentils with butter & cream.",
        priceCents: 22900,
        imageUrl:
          "https://images.unsplash.com/photo-1617196036302-6c3dc48d26d2?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "it-biryani",
        name: "Chicken Biryani",
        description: "Aromatic basmati rice layered with spicy chicken.",
        priceCents: 29900,
        imageUrl:
          "https://images.unsplash.com/photo-1626082923262-4a31b5d5f0d1?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "cat-drinks",
    name: "Drinks",
    items: [
      {
        id: "it-lassi",
        name: "Sweet Lassi",
        description: "Classic Punjabi yogurt-based drink.",
        priceCents: 9900,
        imageUrl:
          "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "it-masala-soda",
        name: "Masala Soda",
        description: "Refreshing fizzy soda with Indian spices.",
        priceCents: 7900,
        imageUrl:
          "https://images.unsplash.com/photo-1604908812648-06c5b78f6cc7?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];
