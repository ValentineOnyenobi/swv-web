import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import {
  audiences,
  images,
  modelStatement,
  reassurances,
  servicePaths,
  testimonials,
  trustPoints,
  whatsappHref,
} from "@/content/site";
import { Eyebrow, LinkButton, ScrollButton, Section } from "./ui";
import { scrollToId } from "@/lib/scroll";

/* ------------------------------- Hero ---------------------------------- */
export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img
        src={images.hero}
        alt="Sunlit boutique suite with linen bedding overlooking a terrace"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/80">
          StayWithVantage - Property operations, simplified
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Make your property easier to run.
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
          We help hotels, short-lets and serviced apartment operators run better through a
          combination of property automation and professional property care.
        </p>

        <p className="mt-6 inline-block border-l-2 border-white/60 bg-black/30 py-2 pl-4 pr-5 font-[family-name:var(--font-display)] text-base leading-snug text-white sm:text-xl">
          {modelStatement}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton to="/contact" className="bg-white text-primary hover:bg-white/90">
            Get Started
          </LinkButton>
          <ScrollButton to="what-do-you-need" variant="light">
            What do you need?
          </ScrollButton>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- What do you need? --------------------------- */
export function WhatDoYouNeed() {
  return (
    <Section id="what-do-you-need">
      <Eyebrow>Choose your path</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">What do you need?</h2>
      <p className="mt-5 max-w-xl text-muted-foreground">
        Use either capability on its own, or combine both.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {servicePaths.map((path) => {
          const isAnchor = path.to.startsWith("#");
          return (
            <article
              key={path.id}
              className="flex flex-col overflow-hidden rounded-xl border border-primary/15 bg-card"
            >
              <img
                src={path.image}
                alt={path.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl leading-snug">{path.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{path.copy}</p>
                <div className="mt-6">
                  {isAnchor ? (
                    <button
                      type="button"
                      onClick={() => scrollToId(path.to.slice(1))}
                      className="inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-2.5 text-sm tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {path.cta}
                    </button>
                  ) : (
                    <LinkButton to={path.to} variant="outline">
                      {path.cta}
                    </LinkButton>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/* ------------------ Property Care services (Elite Handlers) ------------- */
export function HandlersDetail() {
  return null;
}

/* ------------------------ You run the property -------------------------- */
export function Statement() {
  return (
    <Section id="control">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            You run the property.
            <br />
            We make it easier.
          </h2>

          <p className="mt-6 max-w-md text-muted-foreground">
            Keep your people. Keep your management. Keep your business. We provide the systems and
            services that support your operation.
          </p>
          <ul className="mt-8 space-y-3">
            {reassurances.map((r) => (
              <li key={r} className="flex gap-3 border-b border-border pb-3 text-sm">
                <span aria-hidden className="text-muted-foreground">
                  -
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={images.statement}
          alt="Sunlit serviced apartment living room"
          loading="lazy"
          width={1600}
          height={1100}
          className="h-72 w-full object-cover sm:h-[30rem]"
        />
      </div>
    </Section>
  );
}

/* ------------------------------ Trust ----------------------------------- */
export function Trust() {
  return (
    <Section className="bg-secondary/60">
      <Eyebrow>Trust</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Standards you can hand over.</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
        {trustPoints.map((t) => (
          <div key={t.title} className="border-t border-primary/20 pt-5">
            <h3 className="text-lg">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-primary/15 pt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Sample content - illustrative placeholders, not verified customer reviews
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name + t.org} className="relative bg-card p-7">
              <span className="text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                Sample
              </span>
              <blockquote className="mt-3 font-[family-name:var(--font-display)] text-lg leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">
                {t.name} · {t.org}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------- Who it's for ------------------------------- */
export function Audiences() {
  return (
    <Section>
      <Eyebrow>Who it's for</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Built for properties with standards.</h2>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {audiences.map((a) => (
          <figure
            key={a.label}
            className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-lg sm:aspect-[3/4]"
          >
            <img
              src={a.image}
              alt={a.alt}
              loading="lazy"
              width={800}
              height={1000}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <figcaption className="relative p-4 text-sm text-white sm:p-5">{a.label}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------- Final CTA --------------------------------- */
const ctaChoices = [
  { label: "Automate my property", interest: "Automation" },
  { label: "Take care of my property", interest: "Property Care" },
  { label: "Both", interest: "Both" },
];

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden">
      <img
        src={images.ctaProperty}
        alt="Apartment building facade glowing at dusk"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8">
        <h2 className="mx-auto max-w-2xl text-3xl text-white sm:text-5xl">
          Ready to make your property easier to run?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm text-white/80 sm:text-base">
          Tell us what you need today - automation, property care, or both.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          {ctaChoices.map((c) => (
            <Link
              key={c.interest}
              to="/contact"
              search={{ interest: c.interest }}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm tracking-wide text-primary transition-colors hover:bg-white/90 sm:w-auto"
            >
              {c.label}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-white/75">
          Prefer to talk now?{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white underline underline-offset-4"
          >
            <MessageCircle className="size-4" aria-hidden />
            Message us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
