"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircleMore } from "lucide-react";
import Container from "./Container";
import SectionHero from "./SectionHero";
import OptimizedImage from "./OptimizedImage";
import {
  booking as serviceBooking,
  header as serviceHeader,
  services as serviceData,
} from "@/lib/services";

const header = serviceHeader;

// Helper function to collect all images from services
function getAllServiceImages() {
  const images: string[] = [];
  services.forEach((service) => {
    images.push(service.image);
    const extraImages = service.images ?? [];
    images.push(...extraImages);
  });
  return images;
}

const services = serviceData;

const booking = serviceBooking;

// ─── Sub-components ─────────────────────────────────────────────────────────

function ImagePanel({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="w-full md:w-5/12 sm:min-h-90 bg-cream/60 overflow-hidden shrink-0 group"
      onClick={onClick}
    >
      <div className="relative w-full h-full min-h-[320px] md:min-h-full">
        <OptimizedImage
          photo={{
            src,
            alt,
            width: 1200,
            height: 1600,
          }}
          fill
          className="group-hover:scale-105 transition-all duration-700"
          priority={false}
        />
      </div>
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start text-sm text-text-light">
          <span className="w-1.5 h-1.5 bg-brown rounded-full shrink-0 mt-1.5 mr-3" />
          {feature}
        </li>
      ))}
    </ul>
  );
}

function PriceBox({
  price,
  duration,
  photos,
}: {
  price: string;
  duration: string;
  photos: string;
}) {
  return (
    <div className="bg-brown/10 rounded-lg p-4 border border-brown/20 mb-4">
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <p className="text-xs uppercase tracking-wider text-brown font-semibold mb-1">
            Cena
          </p>
          <p className="text-lg font-bold text-foreground">{price}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-brown font-semibold mb-1">
            Trvání
          </p>
          <p className="text-sm font-semibold text-foreground">{duration}</p>
        </div>
      </div>
      <p className="text-sm text-text-light">{photos}</p>
    </div>
  );
}

function PackageCard({
  pkg,
}: {
  pkg: NonNullable<(typeof services)[1]["packages"]>[number];
}) {
  return (
    <div className="bg-brown/10 rounded-lg p-4 border border-brown/20">
      <h4 className="font-bold text-foreground mb-2 text-sm tracking-wide">
        {pkg.name}
      </h4>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-brown font-semibold mb-1">
            Cena
          </p>
          <p className="text-base font-bold text-foreground">{pkg.price}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-brown font-semibold mb-1">
            Trvání
          </p>
          <p className="text-xs text-text-light">{pkg.duration}</p>
        </div>
      </div>
      <ul className="space-y-1">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start text-xs text-text-light">
            <span className="w-1 h-1 bg-brown rounded-full shrink-0 mt-1.5 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      {pkg.extraPrice && (
        <p className="text-xs text-brown font-semibold mt-2 pt-2 border-t border-brown/10">
          {pkg.extraPrice}
        </p>
      )}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const allImages = getAllServiceImages();

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1,
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          setSelectedIndex(null);
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex, allImages]);
  return (
    <section
      className="py-12 bg-background overflow-hidden"
      id="page-wrap-sluzby"
    >
      <Container>
        <SectionHero
          eyebrow={header.eyebrow}
          title={header.heading}
          subtitle={header.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          className="absolute -top-20 -right-20 w-80 h-80 border border-brown/40 rounded-full"
        />

        {/* Service rows */}
        <div className="divide-y divide-brown/10 md:space-y-20">
          {services.map((service, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-0 items-stretch`}
              >
                {/* Main side image */}
                <ImagePanel src={service.image} alt={service.title} />

                {/* Content panel */}
                <div className="flex-1 py-10 md:py-14 px-6 md:px-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-text-light leading-relaxed mb-6 max-w-xl">
                    {service.description}
                  </p>

                  {/* Extra photo strip — sits between description and pricing/packages 
                  <ImageStrip images={extraImages} alt={service.title} />
                  */}

                  {/* Packages variant */}
                  {"packages" in service && service.packages ? (
                    <div className="space-y-3">
                      {service.packages.map((pkg, pkgIndex) => (
                        <PackageCard key={pkgIndex} pkg={pkg} />
                      ))}
                    </div>
                  ) : (
                    <>
                      <PriceBox
                        price={service.price!}
                        duration={service.duration!}
                        photos={service.photos!}
                      />
                      <FeatureList features={service.features} />
                      {service.extraPrice && (
                        <p className="text-xs text-brown font-semibold mt-4 pt-4 border-t border-brown/20">
                          {service.extraPrice}
                        </p>
                      )}
                    </>
                  )}

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("serviceSelected", {
                          detail: { service: service.title },
                        }),
                      );
                      setTimeout(() => {
                        document
                          .getElementById("contact-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 btn-base btn-primary w-fit"
                  >
                    objednat focení
                    <MessageCircleMore
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Booking block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 bg-cream/30 border-2 border-brown/40 rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-brown" />
                <h4 className="font-semibold text-foreground">
                  {booking.location.title}
                </h4>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                {booking.location.text}
              </p>
              <p className="text-sm text-brown font-semibold mt-3">
                {booking.location.transport}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-brown" />
                <h4 className="font-semibold text-foreground">
                  {booking.preparation.title}
                </h4>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                {booking.preparation.text}
              </p>
            </div>
          </div>

          <div className="hidden text-center pt-8 border-t border-brown/20">
            <p className="text-text-light mb-6">{booking.cta.text}</p>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.98 }}
              className="btn-base btn-primary w-fit mx-auto animate-bounce"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("navigationStart"));
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(
                    () => window.dispatchEvent(new Event("navigationEnd")),
                    1000,
                  );
                }, 200);
              }}
            >
              {booking.cta.label}
              <MessageCircleMore className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
