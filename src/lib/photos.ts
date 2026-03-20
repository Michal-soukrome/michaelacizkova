export type PhotoCategory =
  | ""
  | "family"
  | "couples"
  | "pregnancy"
  | "newborn"
  | "kids"
  | "portraits"
  | "brand";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: PhotoCategory;
  size: "small" | "medium" | "large";
}

export const categoryLabels: Record<PhotoCategory, string> = {
  "": "Vše",
  family: "rodinné",
  couples: "párové",
  pregnancy: "těhotenské",
  newborn: "newborn",
  kids: "dětské",
  portraits: "portrétní",
  brand: "brandové",
};

export const getAvailableCategories = (photoList: Photo[]) => {
  const unique = new Set<PhotoCategory>();
  unique.add("" as PhotoCategory); // Always include "All"
  photoList.forEach((photo) => {
    if (photo.category) unique.add(photo.category);
  });
  return Array.from(unique).map((cat) => ({
    value: cat,
    label: categoryLabels[cat],
  }));
};

export const photos: Photo[] = [
  {
    id: "1",
    src: "/assets/1.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "family",
    size: "large",
  },
  {
    id: "2",
    src: "/assets/2.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "family",
    size: "medium",
  },
  {
    id: "3",
    src: "/assets/3.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "family",
    size: "small",
  },
  {
    id: "4",
    src: "/assets/4.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "family",
    size: "medium",
  },

  {
    id: "5",
    src: "/assets/5.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "couples",
    size: "large",
  },
  {
    id: "6",
    src: "/assets/6.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "couples",
    size: "medium",
  },
  {
    id: "7",
    src: "/assets/7.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "couples",
    size: "medium",
  },
  {
    id: "8",
    src: "/assets/1.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "couples",
    size: "large",
  },

  {
    id: "9",
    src: "/assets/2.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "newborn",
    size: "large",
  },
  {
    id: "10",
    src: "/assets/3.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "newborn",
    size: "small",
  },
  {
    id: "11",
    src: "/assets/4.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "newborn",
    size: "medium",
  },
  {
    id: "12",
    src: "/assets/5.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "newborn",
    size: "medium",
  },

  {
    id: "13",
    src: "/assets/6.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "kids",
    size: "small",
  },
  {
    id: "14",
    src: "/assets/7.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "kids",
    size: "medium",
  },
  {
    id: "15",
    src: "/assets/1.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "kids",
    size: "large",
  },

  // Nature
  {
    id: "16",
    src: "/assets/2.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "portraits",
    size: "medium",
  },
  {
    id: "17",
    src: "/assets/3.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "portraits",
    size: "large",
  },
  {
    id: "18",
    src: "/assets/4.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "portraits",
    size: "small",
  },
  {
    id: "19",
    src: "/assets/5.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "brand",
    size: "medium",
  },
  {
    id: "20",
    src: "/assets/6.jpg",
    alt: "alt popisek",
    title: "název fotky",
    category: "brand",
    size: "large",
  },
];
