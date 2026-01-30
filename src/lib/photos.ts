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
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85",
    alt: "Black and white portrait of contemplative person",
    title: "Portrait Study I",
    category: "Portraits",
    size: "large",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=85",
    alt: "Dramatic portrait with natural lighting",
    title: "Natural Light",
    category: "Portraits",
    size: "medium",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1554048612-b6a482dbe3c2?w=800&q=85",
    alt: "Professional portrait photography",
    title: "Studio Session",
    category: "Portraits",
    size: "small",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&q=85",
    alt: "Elegant portrait with soft focus",
    title: "Ethereal Beauty",
    category: "Portraits",
    size: "medium",
  },

  // Landscapes
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=85",
    alt: "Urban landscape in monochrome",
    title: "City Lights",
    category: "Landscapes",
    size: "large",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85",
    alt: "Mountain landscape at dawn",
    title: "Mountain Serenity",
    category: "Landscapes",
    size: "medium",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85",
    alt: "Forest path in black and white",
    title: "Forest Path",
    category: "Landscapes",
    size: "medium",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=85",
    alt: "Dramatic sky over water",
    title: "Horizon Line",
    category: "Landscapes",
    size: "large",
  },

  // Architecture
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85",
    alt: "Modern architectural detail",
    title: "Urban Geometry",
    category: "Architecture",
    size: "large",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=85",
    alt: "Minimalist building facade",
    title: "Clean Lines",
    category: "Architecture",
    size: "small",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=85",
    alt: "Interior architectural photography",
    title: "Interior Space",
    category: "Architecture",
    size: "medium",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=85",
    alt: "Historic building detail",
    title: "Heritage",
    category: "Architecture",
    size: "medium",
  },

  // Street
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&q=85",
    alt: "Street photography moment",
    title: "Street Moment I",
    category: "Street",
    size: "small",
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=85",
    alt: "Urban life captured candidly",
    title: "City Life",
    category: "Street",
    size: "medium",
  },
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=85",
    alt: "Nighttime street scene",
    title: "After Dark",
    category: "Street",
    size: "large",
  },

  // Nature
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85",
    alt: "Nature in black and white",
    title: "Natural Beauty",
    category: "Nature",
    size: "medium",
  },
  {
    id: "17",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=85",
    alt: "Dramatic nature landscape",
    title: "Wild Essence",
    category: "Nature",
    size: "large",
  },
  {
    id: "18",
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=85",
    alt: "Forest and trees in monochrome",
    title: "Woodland",
    category: "Nature",
    size: "small",
  },
  {
    id: "19",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=85",
    alt: "Floral detail in black and white",
    title: "Botanical Study",
    category: "Nature",
    size: "medium",
  },
  {
    id: "20",
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=85",
    alt: "Seascape with dramatic waves",
    title: "Coastal",
    category: "Nature",
    size: "large",
  },
];
