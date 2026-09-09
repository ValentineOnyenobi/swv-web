import { bothFlow } from "@/content/site";
import { LinkButton, Section, Eyebrow } from "./ui";

export function BothSection() {
  return (
    <Section className="bg-ink text-white">
      <Eyebrow>Integrated</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl text-white sm:text-4xl">Prefer both together?</h2>
      <p className="mt-5 max-w-xl text-white/70">
        Combine StayWithVantage automation with Elite Handlers property care for one coordinated
        operating flow.
      </p>

      <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {bothFlow.map((stage, i) => (
          <li
            key={stage}
            className="flex items-center gap-4 border-t border-white/15 pt-4 text-sm text-white/85"
          >
            <span className="text-xs tracking-[0.2em] text-white/40">0{i + 1}</span>
            <span className="text-base leading-snug">{stage}</span>
          </li>
        ))}
      </ol>

      <p className="mt-12 max-w-xl font-[family-name:var(--font-display)] text-xl text-white sm:text-2xl">
        One coordinated flow from request to completion.
      </p>

      <div className="mt-8">
        <LinkButton to="/" hash="how-it-works" className="bg-white text-primary hover:bg-white/90">
          See how it works
        </LinkButton>
      </div>
    </Section>
  );
}
