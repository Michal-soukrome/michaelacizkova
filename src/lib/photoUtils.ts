import { Photo, PhotoCategory } from "./photoTypes";

export const categoryLabels: Record<PhotoCategory, string> = {
  "": "",
  family: "Rodinné",
  couples: "Páry",
  maternity: "Těhotenské",
  newborn: "Novorozenci",
  children: "Děti",
  portrait: "Portréty",
  mix: "Rodinné, párové a těhotenské focení",
  brand: "Brand",
  atelier: "Ateliér",
  boudoir: "Boudoir",
  reportage: "Reportáž",
  romantic: "Romantické",
  wedding: "Svatební focení",
  homepage: "",
};

export function getAvailableCategories(photos: Photo[]) {
  const unique = Array.from(
    new Set(photos.map((p) => p.category).filter((c) => c && c.trim() !== "")),
  );

  return unique
    .filter((c) => c !== "homepage")
    .map((c) => ({
      value: c,
      label: categoryLabels[c],
    }));
}
