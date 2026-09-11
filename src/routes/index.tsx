import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, Hero, WhatDoYouNeed } from "@/components/site/Sections";
import { HowItWorks } from "@/components/site/HowItWorksFlow";

const title =
  "StayWithVantage | Property Automation, Guest Services & Property Care";
const description =
  "Make your property easier to run. Run better. Earn more from every guest with property automation, guest services and professional property care.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhatDoYouNeed />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
