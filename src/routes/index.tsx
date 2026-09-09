import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, Hero, WhatDoYouNeed } from "@/components/site/Sections";
import { HowItWorks } from "@/components/site/HowItWorksFlow";

const title = "StayWithVantage - Property operations, simplified";
const description =
  "Property automation and professional property care for hotels, short-lets and serviced apartments. Technology coordinates the operation. People deliver the work.";

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
