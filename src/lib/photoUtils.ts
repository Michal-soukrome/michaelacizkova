import { Photo, PhotoCategory } from "./photoTypes";

export const categoryLabels: Record<PhotoCategory, string> = {
  "": "",
  family: "Rodinné",
  couples: "Páry",
  maternity: "Těhotenské",
  newborn: "Novorozenci",
  children: "Děti",
  portrait: "Portréty",
  brand: "Brand",
  atelier: "Ateliér",
  boudoir: "Boudoir",
  reportage: "Reportáž",
  romantic: "Romantické",
  wedding: "Svatby",
};

export const getAvailableCategories = (photoList: Photo[]) => {
  const unique = new Set<PhotoCategory>();

  photoList.forEach((photo) => {
    if (photo.category) unique.add(photo.category);
  });

  return Array.from(unique).map((cat) => ({
    value: cat,
    label: categoryLabels[cat],
  })) as { value: PhotoCategory; label: string }[];
};
