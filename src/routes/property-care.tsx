import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/site/ui";
import { Estimator } from "@/components/site/Estimator";
import { BothSection } from "@/components/site/BothSection";
import { handlerServices } from "@/content/site";
import heroImage from "@/assets/housekeeping-team.jpg";

const title = "Property Care by Elite Handlers - StayWithVantage";
const description =
  "Housekeeping, linen management, turnover, deep, industrial and project cleaning for hospitality and property operators, delivered by Elite Handlers.";

export const Route = createFileRoute("/property-care")({
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
  component: PropertyCarePage,
});

function PropertyCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Housekeeping team preparing a suite"
          width={1600}
          height={1100}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
          <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/80">
            Property Care - Elite Handlers
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl leading-[1.06] text-white sm:text-5xl md:text-6xl">
            Professional property care, without the operational headache.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
            Elite Handlers provides reliable housekeeping, cleaning, linen and related property care
            services for hospitality and property operators.
          </p>
        </div>
      </section>

      {/* Services */}
      <Section>
        <Eyebrow>Services</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">People on the ground.</h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A well-kept property earns better reviews, more repeat bookings, and a higher rate per
          stay - the physical work behind guest experience that owners rarely see, but always feel
          in the results.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {handlerServices.map((s) => (
            <article key={s.title}>
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-56 w-full rounded-lg object-cover"
              />
              <h3 className="mt-5 text-xl leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Estimator */}
      <Estimator />

      {/* Quoted services */}
      <Section className="py-14 md:py-16">
        <div className="rounded-xl border border-primary/20 bg-card px-6 py-7 sm:px-9 sm:py-8">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Not included in the estimator
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed">
            Turnover cleaning, deep cleaning, industrial cleaning and project-based work are quoted
            individually - contact us for a quote.
          </p>
        </div>
      </Section>

      {/* Best for */}
      <Section className="bg-sand">
        <Eyebrow>Best for</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-2xl leading-snug sm:text-3xl">
          Owners and operators who want dependable property care without the complexity of
          recruiting, training and managing the service operation themselves.
        </h2>
        <div className="mt-9">
          <Link
            to="/contact"
            search={{ interest: "Property Care" }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-ink"
          >
            Request a Quote
          </Link>
        </div>
      </Section>

      <BothSection />
    </>
  );
}
