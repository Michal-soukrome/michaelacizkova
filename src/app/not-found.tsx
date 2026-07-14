import Link from "next/link";
import { notFoundPageMetadata } from "@/lib/pageMetadata";

export const metadata = notFoundPageMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-8 -mt-20">
      <div>
        <h3 className="text-4xl font-bold mb-4">Stránka nenalezena</h3>
        <p className="text-lg text-gray-600">
          Omlouvám se, ale tato stránka neexistuje.
        </p>
        <Link href="/" className="mt-6 btn-base btn-primary w-fit mx-auto">
          Zpět na domovskou stránku
        </Link>
      </div>
    </div>
  );
}
