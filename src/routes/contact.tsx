import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { contact, interestOptions, whatsappHref } from "@/content/site";
import { Eyebrow, Section } from "@/components/site/ui";
import { HubSpotForm } from "@/components/site/HubSpotForm";

const title = "Contact StayWithVantage - Let's make it easier";
const description =
  "Talk to StayWithVantage about property automation, property care, or both. WhatsApp is the fastest route, or send us an enquiry.";

type ContactSearch = { interest?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    const raw = typeof search["interest"] === "string" ? (search["interest"] as string) : undefined;
    const match = interestOptions.find((o) => o.toLowerCase() === raw?.toLowerCase());
    return match ? { interest: match } : {};
  },
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
  component: ContactPage,
});

function ContactPage() {
  const { interest } = Route.useSearch();

  return (
    <Section className="bg-secondary/60 pt-32 sm:pt-40">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl">Let's make it easier.</h1>
          <p className="mt-4 max-w-sm text-muted-foreground">
            WhatsApp is the fastest route to a real answer - usually the same day.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-ink"
          >
            <MessageCircle className="size-4" /> Message us on WhatsApp
          </a>
          <p className="mt-8 text-sm text-muted-foreground">
            Or email{" "}
            <a href={`mailto:${contact.email}`} className="text-foreground underline">
              {contact.email}
            </a>
          </p>
        </div>

        <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl">Send an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us about the property and we'll come back to you.
          </p>
          <div className="mt-6">
            <HubSpotForm defaultInterest={interest} />
          </div>
        </div>
      </div>
    </Section>
  );
}
