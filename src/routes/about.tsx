import { createFileRoute } from "@tanstack/react-router";
import { Statement, Trust } from "@/components/site/Sections";
import { Eyebrow, LinkButton, Section } from "@/components/site/ui";
import { modelStatement, whoWeServe, whyPoints } from "@/content/site";
import heroSuite from "@/assets/hero-suite.jpg";

const title = "About StayWithVantage - Property operations, simplified";
const description =
  "StayWithVantage combines property automation with Elite Handlers property care for hotels, short-lets, serviced apartments and property managers.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[62svh] items-end overflow-hidden">
        <img
          src={heroSuite}
          alt="Sunlit boutique suite opening onto a terrace"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
          <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/80">About</p>
          <h1 className="mt-5 max-w-3xl text-3xl leading-[1.06] text-white sm:text-5xl">
            Property operations, simplified.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
            {modelStatement}
          </p>
        </div>
      </section>

      {/* Who we serve */}
      <Section>
        <Eyebrow>Who we serve</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Who we serve</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whoWeServe.map((w) => (
            <article
              key={w.title}
              className="overflow-hidden rounded-xl border border-primary/15 bg-card"
            >
              <img
                src={w.image}
                alt={w.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl leading-snug">{w.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{w.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-xl text-muted-foreground">
          Whether you manage 5 units or 500, the model is designed to scale with you.
        </p>
      </Section>

      {/* Existing trust + testimonials */}
      <Trust />

      {/* Existing "You run the property" section */}
      <Statement />

      {/* Why StayWithVantage */}
      <Section className="bg-sand">
        <Eyebrow>Why</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Why StayWithVantage</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whyPoints.map((p) => (
            <div key={p.title} className="border-t border-primary/20 pt-5">
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <LinkButton to="/contact">Get Started</LinkButton>
          <LinkButton to="/property-care" variant="outline">
            Explore property care
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
