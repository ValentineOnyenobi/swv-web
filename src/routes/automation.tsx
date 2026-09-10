import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, ExploreLink, Section } from "@/components/site/ui";
import { BothSection } from "@/components/site/BothSection";
import {
  automationCapabilities,
  automationOutcomes,
  exampleWorkflow,
  images,
} from "@/content/site";
import pageHero from "@/assets/pf-page-hero.jpg";

const title = "Property Automation - StayWithVantage";
const description =
  "Capture requests, route tasks and see what is happening across your properties. Property automation for hotels, short-lets and serviced apartment operators.";

export const Route = createFileRoute("/automation")({
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
  component: AutomationPage,
});

function AutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink px-5 pb-20 pt-32 text-white sm:px-8 sm:pt-40 md:pb-28">
        <div className="mx-auto grid w-full max-w-6xl items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/50">Automation</p>
            <h1 className="mt-7 text-4xl leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              Run your property operations with less friction.
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/65">
              StayWithVantage helps property operators capture requests, coordinate tasks and see
              what is happening across their properties - without relying on disconnected messages
              and manual follow-ups.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={pageHero}
              alt="Operator reviewing property requests on a phone"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
       </section>

      {/* Guest services teaser */}
      <Section id="guest-services" className="py-16 md:py-20">
        <Eyebrow>Guest Services</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Guest services, on demand.</h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          The same system that captures a maintenance request can also sell your guests something -
          private chef, concierge, airport pickup and more.
        </p>
        <div className="mt-7">
          <ExploreLink to="/guest-services">Learn more about guest services</ExploreLink>
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">What the system does.</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {automationCapabilities.map((c) => (
            <div
              key={c}
              className="rounded-lg border border-primary/15 bg-card px-5 py-4 text-sm"
            >
              {c}
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="bg-sand">
        <Eyebrow>What changes</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Operational problems, solved.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {automationOutcomes.map((o) => (
            <div key={o.title} className="border-t border-primary/20 pt-5">
              <h3 className="text-lg leading-snug">{o.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{o.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Example workflow */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Example workflow</Eyebrow>
            <h2 className="mt-4 max-w-md text-3xl sm:text-4xl">One request, end to end.</h2>
            <ol className="mt-10 space-y-0">
              {exampleWorkflow.map((stage, i) => (
                <li key={stage}>
                  <div className="flex items-center gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-primary/25 text-[0.65rem] tracking-[0.1em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="text-base">{stage}</span>
                  </div>
                  {i < exampleWorkflow.length - 1 && (
                    <span
                      aria-hidden
                      className="ml-4 block h-6 w-px bg-gradient-to-b from-primary/30 to-primary/5"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
          <img
            src={images.flowTrack}
            alt="Request status timeline showing received, in progress and resolved"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full rounded-xl object-cover sm:h-[32rem]"
          />
        </div>
      </Section>

      {/* Scale */}
      <Section className="bg-ink text-white">
        <Eyebrow>Scale</Eyebrow>
        <p className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-2xl leading-snug text-white sm:text-4xl">
          Add a second property, a tenth, a fiftieth - the system doesn&apos;t change. Only the view
          does.
        </p>
        <p className="mt-6 max-w-xl text-white/65">
          The same operating framework works for a single building or a multi-property portfolio.
        </p>
      </Section>

      {/* Best for */}
      <Section>
        <Eyebrow>Best for</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-2xl leading-snug sm:text-3xl">
          Operators who already have their own teams but want better systems, coordination and
          visibility.
        </h2>
        <div className="mt-9">
          <Link
            to="/contact"
            search={{ interest: "Automation" }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-ink"
          >
            Get Started
          </Link>
        </div>
      </Section>

      <BothSection />
    </>
  );
}
