import { sanity } from "./client";
import { Testimonial } from "./testimonialTypes";

export async function getTestimonials(): Promise<Testimonial[]> {
  return sanity.fetch(`
    *[_type == "testimonial"] | order(order asc, _createdAt desc) {
      _id,
      name,
      role,
      content,
      rating
    }
  `);
}
