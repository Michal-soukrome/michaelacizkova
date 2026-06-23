export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: {
    asset: {
      url: string;
    };
  };
  excerpt?: string;
  content?: any;
  publishedAt?: string;
}
export type SanityImageBlock = {
  _type: "image";
  _key: string;
  alt?: string;
  asset: { _ref: string };
};

export type MiniGalleryBlock = {
  _type: "miniGallery";
  _key: string;
  images: SanityImageBlock[];
};
