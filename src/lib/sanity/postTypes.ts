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
