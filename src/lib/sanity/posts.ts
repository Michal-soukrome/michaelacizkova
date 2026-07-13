import { sanity } from "./client";
import { Post } from "./postTypes";

export async function getPosts(): Promise<Post[]> {
  return sanity.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      coverImage,
      excerpt,
      publishedAt
    }
  `);
}

export async function getPost(slug: string): Promise<Post> {
  return sanity.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      coverImage,
      excerpt,
      content,
      publishedAt,
      _updatedAt
    }
  `,
    { slug },
  );
}
