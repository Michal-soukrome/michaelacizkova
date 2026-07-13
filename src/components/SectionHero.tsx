"use client";

import Section from "./Section";
import Container from "./Container";
import { ReactNode } from "react";

interface SectionHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  id?: string;
  className?: string;
  children?: ReactNode;
}

export default function SectionHero({
  eyebrow,
  title,
  subtitle,
  description,
  id,
  className = "",
  children,
}: SectionHeroProps) {
  return (
    <Section id={id} className={className} background="default">
      <Container>
        <div className="text-center">
          {eyebrow ? (
            <p className="text-sm tracking-[0.3em] text-brown uppercase mb-3">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          {subtitle ? (
            <h2 className="text-lg font-semibold tracking-tight text-foreground mt-6">
              {subtitle}
            </h2>
          ) : null}
          <div className="w-20 h-px bg-brown mx-auto mt-6" />
          {description ? (
            <p className="text-brown mt-8 max-w-2xl mx-auto">{description}</p>
          ) : null}
          {children}
        </div>
      </Container>
    </Section>
  );
}
