export type Review = {
  id: string;
  rating: number;
  author: string;
  title: string;
  content: string;
  createdAt: Date;
};
export type ItemTypes = {
  title: string;
  slug: string;
  details: string;
  description: string;
  image: string;
  rating: number;
  reviews: [] | Review[];
  sizes: {
    L: { price: number | null };
    M: { price: number | null };
    XL: { price: number | null };
    nosize: { price: number | null };
  };
  category: {
    en: string;
    fa: string;
  };
  tags?: [] | string[];
};

type DbType = {
  bycicles: ItemTypes[];
  accessories: ItemTypes[];
};

export const db: DbType = {
  bycicles: [
    {
      title: "Kryo X26 MTB – Model X",
      slug: "Kryo-X26-MTB-Model-X",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/asset/bicycle-1.jpg",
      rating: 2,
      sizes: {
        nosize: { price: 350 },
        M: { price: null },
        L: { price: null },
        XL: { price: null },
      },
      reviews: [
        {
          id: "dd3442542245",
          author: "John",
          content: "it biggest piece of dog shit i have ever seen",
          createdAt: new Date(),
          rating: 2.5,
          title: "The current kind of dog shit",
        },
      ],
      category: {
        en: "bycicle",
        fa: "دوچرخه",
      },
      tags: ["bicycle", "steel"],
    },
    {
      title: "Kryo X26 MTB – Model Z",
      slug: "Kryo-X26-MTB-Model-Z",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/asset/bicycle-4.jpg",
      reviews: [],
      rating: 3.2,
      sizes: {
        nosize: { price: 350 },
        M: { price: null },
        L: { price: null },
        XL: { price: null },
      },
      category: {
        en: "bycicle",
        fa: "دوچرخه",
      },
      tags: ["bicycle", "steel"],
    },
    {
      title: "Kryo X26 MTB – Model Y",
      slug: "Kryo-X26-MTB-Model-Y",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/asset/bicycle-5.jpg",
      reviews: [],
      rating: 5,
      sizes: {
        nosize: { price: 350 },
        M: { price: null },
        L: { price: null },
        XL: { price: null },
      },
      category: {
        en: "bycicle",
        fa: "دوچرخه",
      },
      tags: ["bicycle", "steel"],
    },
    {
      title: "Kryo X26 MTB – Model K",
      slug: "Kryo-X26-MTB-Model-K",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/asset/bicycle-7.jpg",
      reviews: [],
      rating: 4.5,
      sizes: {
        nosize: { price: 356000 },
        M: { price: null },
        L: { price: null },
        XL: { price: null },
      },
      category: {
        en: "bycicle",
        fa: "دوچرخه",
      },
      tags: ["bicycle", "steel"],
    },
  ],
  accessories: [
    {
      title: "Bicycle Helmet Sky Blue",
      slug: "Bicycle-Helmet-Sky-Blue",
      category: {
        en: "accessory",
        fa: "لوازم",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/asset/helmet-3.jpg",
      reviews: [],
      rating: 4.5,
      sizes: {
        nosize: { price: null },
        M: { price: 190000 },
        L: { price: 290000 },
        XL: { price: 490000 },
      },
    },
    {
      title: "Bicycle Helmet Sky Fire",
      slug: "Bicycle-Helmet-Sky-Fire",
      category: {
        en: "accessory",
        fa: "لوازم",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/asset/helmet-4.jpg",
      reviews: [],
      rating: 1.5,
      sizes: {
        nosize: { price: null },
        M: { price: 190000 },
        L: { price: 290000 },
        XL: { price: 490000 },
      },
    },
    {
      title: "Bicycle Gloves Gold",
      slug: "Bicycle-Gloves-Gold",
      category: {
        en: "accessory",
        fa: "لوازم",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/asset/accessories-3.jpg",
      reviews: [],
      rating: 4,
      sizes: {
        nosize: { price: null },
        M: { price: 190000 },
        L: { price: 290000 },
        XL: { price: 490000 },
      },
    },
    {
      title: "Bicycle Gloves Blue",
      slug: "Bicycle-Gloves-Blue",
      category: {
        en: "accessory",
        fa: "لوازم",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/asset/accessories-4.jpg",
      reviews: [],
      rating: 3.5,
      sizes: {
        nosize: { price: null },
        M: { price: 190000 },
        L: { price: 290000 },
        XL: { price: 490000 },
      },
    },
    {
      title: "Bicycle Gloves pink",
      slug: "Bicycle-Gloves-pink",
      category: {
        en: "accessory",
        fa: "لوازم",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/asset/accessories-5.jpg",
      reviews: [],
      rating: 4.2,
      sizes: {
        nosize: { price: null },
        M: { price: 190000 },
        L: { price: 290000 },
        XL: { price: 490000 },
      },
    },
  ],
};
