export type PhotoCategory =
  | ""
  | "family"
  | "couples"
  | "maternity"
  | "newborn"
  | "children"
  | "portrait"
  | "brand"
  | "atelier"
  | "boudoir"
  | "reportage"
  | "romantic"
  | "wedding";

export type PhotoCategoryString = `${PhotoCategory}`;

export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: PhotoCategoryString;
  size: "small" | "medium" | "large";
  width: number;
  height: number;
  ratio: number;
  blurDataURL?: string;
}
