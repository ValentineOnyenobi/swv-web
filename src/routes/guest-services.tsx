import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/site/ui";
import { guestServicesHero } from "@/content/site";
import heroImage from "@/assets/gs-hero-guest.jpg";

const title = "Guest Services - StayWithVantage";
const description =
  "Automated guest services and upsells that make small hotels and short-lets feel like a boutique chain. Private chef, concierge, airport pickup and more.";

export const Route = createFileRoute("/guest-services")({
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
  component: GuestServicesPage,
});

function GuestServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Guest browsing hotel-style services on a phone"
          width={1600}
          height={1100}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
          <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/80">
            Guest Services
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl leading-[1.06] text-white sm:text-5xl md:text-6xl">
            {guestServicesHero.heading}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {guestServicesHero.subheading}
          </p>
        </div>
      </section>

      {/* Framing + two columns */}
      <Section>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {guestServicesHero.framing}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="border-t border-primary/20 pt-5 text-lg">What Guests Get</h2>
            <ul className="mt-5 space-y-3">
              {guestServicesHero.guestsGet.map((g) => (
                <li key={g} className="flex gap-3 text-sm">
                  <span aria-hidden className="text-muted-foreground">
                    -
                  </span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="border-t border-primary/20 pt-5 text-lg">What Owners Get</h2>
            <ul className="mt-5 space-y-3">
              {guestServicesHero.ownersGet.map((o) => (
                <li key={o} className="flex gap-3 text-sm">
                  <span aria-hidden className="text-muted-foreground">
                    -
                  </span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Services grid */}
      <Section className="bg-sand">
        <Eyebrow>Services</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">What guests can ask for.</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {guestServicesHero.services.map((s) => (
            <figure
              key={s.label}
              className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-lg"
            >
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                width={800}
                height={1000}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <figcaption className="relative p-4 text-sm text-white sm:p-5">{s.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">{guestServicesHero.servicesNote}</p>
      </Section>

      {/* How it works */}
      <Section className="py-16 md:py-20">
        <div className="rounded-xl border border-primary/20 bg-card px-6 py-7 sm:px-9 sm:py-8">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">How It Works</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed">{guestServicesHero.flow}</p>
        </div>
      </Section>

      {/* Connection back to automation */}
      <Section className="bg-ink py-16 text-white md:py-20">
        <h2 className="max-w-xl text-2xl leading-snug text-white sm:text-3xl">
          Powered by the same platform.
        </h2>
        <p className="mt-5 max-w-2xl text-white/70">
          Guest services run on the same automation system that handles maintenance and housekeeping
          requests - one dashboard, no separate tool to learn.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            to="/automation"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm tracking-wide text-white transition-colors hover:bg-white hover:text-primary"
          >
            See the automation platform
          </Link>
          <Link
            to="/contact"
            search={{ interest: "Guest Services" }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {guestServicesHero.ctaLabel}
          </Link>
        </div>
      </Section>
    </>
  );
}
