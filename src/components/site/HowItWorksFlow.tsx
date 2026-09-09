import { useEffect, useRef, useState } from "react";
import { howItWorks } from "@/content/site";
import { cn } from "@/lib/utils";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none flex items-center gap-1 text-accent-foreground/50",
        className,
      )}
    >
      <span className="h-px w-8 bg-gradient-to-r from-transparent via-primary/30 to-primary/40 sm:w-12" />
      <span className="motion-safe:animate-[pulse_2.8s_cubic-bezier(0.4,0,0.6,1)_infinite] text-xs">
        →
      </span>
    </span>
  );
}

export function HowItWorks() {
  const { ref, shown } = useReveal<HTMLOListElement>();

  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-secondary/60 px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
          From request to completion, in four steps.
        </h2>

        {/* Connected journey */}
        <ol ref={ref} className="mt-12 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {howItWorks.map((s, i) => (
            <li
              key={s.step}
              className={cn(
                "relative flex gap-5 transition-all duration-700 ease-out lg:block lg:gap-0",
                shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* mobile vertical connector */}
              <div
                aria-hidden
                className="relative flex w-6 shrink-0 flex-col items-center lg:hidden"
              >
                <span className="grid size-6 place-items-center rounded-full border border-primary/25 bg-background text-[0.5rem] tracking-[0.1em] text-muted-foreground">
                  {s.step}
                </span>
                {i < howItWorks.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-gradient-to-b from-primary/25 to-primary/5" />
                )}
              </div>

              <div className="min-w-0 flex-1 pb-2 lg:pb-0">
                <div className="overflow-hidden rounded-lg border border-primary/10 bg-card">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>

                {/* desktop marker row with connector */}
                <div aria-hidden className="mt-6 hidden items-center gap-2 lg:flex">
                  <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.18em] text-accent-foreground/70">
                    {s.step}
                  </span>
                  <span className="text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.stage}
                  </span>
                  {i < howItWorks.length - 1 && <Arrow className="ml-auto" />}
                </div>
                <div className="mt-4 border-t border-primary/15 pt-4 lg:mt-3 lg:pt-4">
                  <span className="text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground lg:hidden">
                    {s.stage}
                  </span>
                  <h3 className="mt-1 text-lg leading-snug lg:mt-0">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Information panel */}
        <div className="mt-16 rounded-lg border border-primary/15 bg-background/70 px-6 py-8 sm:px-10 sm:py-10">
          <h3 className="max-w-xl text-xl sm:text-2xl">
            StayWithVantage coordinates information.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The work itself is performed either by your own team or by the{" "}
            <span className="text-foreground">Elite Handlers</span> Property Care team.
          </p>
        </div>
      </div>
    </section>
  );
}
