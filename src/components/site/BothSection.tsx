import { bothFlow } from "@/content/site";
import { LinkButton, Section, Eyebrow } from "./ui";

export function BothSection() {
  return (
    <Section className="bg-ink text-white">
      <Eyebrow>Complete Package</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl text-white sm:text-4xl">The Complete Elite Package.</h2>
      <p className="mt-5 max-w-xl text-white/70">
        Combine automation, guest services, and Elite Handlers property care, and every visit works
        harder - fewer missed requests, a better-kept property, and more revenue from every stay.
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
        One coordinated flow. Every part of it working toward more revenue, not just less friction.
      </p>

      <div className="mt-8">
        <LinkButton to="/" hash="how-it-works" className="bg-white text-primary hover:bg-white/90">
          See how it works
        </LinkButton>
      </div>
    </Section>
  );
}
