import { redirect } from "next/navigation";
import { notFoundPageMetadata } from "@/lib/pageMetadata";

export const metadata = notFoundPageMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function NotFound() {
  redirect("/");
}
