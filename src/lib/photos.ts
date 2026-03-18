export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  size: "small" | "medium" | "large";
}

export const photos: Photo[] = [
  // Portraits
  {
    id: "1",
    src: "/assets/1.jpg",
    alt: "Black and white portrait of contemplative person",
    title: "Portrait Study I",
    category: "Portraits",
    size: "large",
  },
  {
    id: "2",
    src: "/assets/2.jpg",
    alt: "Dramatic portrait with natural lighting",
    title: "Natural Light",
    category: "Portraits",
    size: "medium",
  },
  {
    id: "3",
    src: "/assets/3.jpg",
    alt: "Professional portrait photography",
    title: "Studio Session",
    category: "Portraits",
    size: "small",
  },
  {
    id: "4",
    src: "/assets/4.jpg",
    alt: "Elegant portrait with soft focus",
    title: "Ethereal Beauty",
    category: "Portraits",
    size: "medium",
  },

  // Landscapes
  {
    id: "5",
    src: "/assets/5.jpg",
    alt: "Urban landscape in monochrome",
    title: "City Lights",
    category: "Landscapes",
    size: "large",
  },
  {
    id: "6",
    src: "/assets/6.jpg",
    alt: "Mountain landscape at dawn",
    title: "Mountain Serenity",
    category: "Landscapes",
    size: "medium",
  },
  {
    id: "7",
    src: "/assets/7.jpg",
    alt: "Forest path in black and white",
    title: "Forest Path",
    category: "Landscapes",
    size: "medium",
  },
  {
    id: "8",
    src: "/assets/1.jpg",
    alt: "Dramatic sky over water",
    title: "Horizon Line",
    category: "Landscapes",
    size: "large",
  },

  // Architecture
  {
    id: "9",
    src: "/assets/2.jpg",
    alt: "Modern architectural detail",
    title: "Urban Geometry",
    category: "Architecture",
    size: "large",
  },
  {
    id: "10",
    src: "/assets/3.jpg",
    alt: "Minimalist building facade",
    title: "Clean Lines",
    category: "Architecture",
    size: "small",
  },
  {
    id: "11",
    src: "/assets/4.jpg",
    alt: "Interior architectural photography",
    title: "Interior Space",
    category: "Architecture",
    size: "medium",
  },
  {
    id: "12",
    src: "/assets/5.jpg",
    alt: "Historic building detail",
    title: "Heritage",
    category: "Architecture",
    size: "medium",
  },

  // Street
  {
    id: "13",
    src: "/assets/6.jpg",
    alt: "Street photography moment",
    title: "Street Moment I",
    category: "Street",
    size: "small",
  },
  {
    id: "14",
    src: "/assets/7.jpg",
    alt: "Urban life captured candidly",
    title: "City Life",
    category: "Street",
    size: "medium",
  },
  {
    id: "15",
    src: "/assets/1.jpg",
    alt: "Nighttime street scene",
    title: "After Dark",
    category: "Street",
    size: "large",
  },

  // Nature
  {
    id: "16",
    src: "/assets/2.jpg",
    alt: "Nature in black and white",
    title: "Natural Beauty",
    category: "Nature",
    size: "medium",
  },
  {
    id: "17",
    src: "/assets/3.jpg",
    alt: "Dramatic nature landscape",
    title: "Wild Essence",
    category: "Nature",
    size: "large",
  },
  {
    id: "18",
    src: "/assets/4.jpg",
    alt: "Forest and trees in monochrome",
    title: "Woodland",
    category: "Nature",
    size: "small",
  },
  {
    id: "19",
    src: "/assets/5.jpg",
    alt: "Floral detail in black and white",
    title: "Botanical Study",
    category: "Nature",
    size: "medium",
  },
  {
    id: "20",
    src: "/assets/6.jpg",
    alt: "Seascape with dramatic waves",
    title: "Coastal",
    category: "Nature",
    size: "large",
  },
];
