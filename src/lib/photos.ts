export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  size: "small" | "medium" | "large";
}

export const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    alt: "Black and white portrait",
    title: "Portrait Study",
    category: "Portraits",
    size: "large",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
    alt: "Urban landscape in monochrome",
    title: "City Lights",
    category: "Landscapes",
    size: "medium",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    alt: "Street photography",
    title: "Street Moment",
    category: "Street",
    size: "small",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    alt: "Nature in black and white",
    title: "Natural Beauty",
    category: "Nature",
    size: "medium",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    alt: "Architectural detail",
    title: "Urban Geometry",
    category: "Architecture",
    size: "large",
  },
];
