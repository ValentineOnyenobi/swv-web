import { useMemo, useState } from "react";
import { Eyebrow, LinkButton, Section } from "./ui";
import { cn } from "@/lib/utils";

type Size = "small" | "four" | "larger";
type Freq = 1 | 2 | 3;
type LinenFreq = 1 | 2 | 3;

const sizeOptions: { value: Size; label: string }[] = [
  { value: "small", label: "1–2 bedroom" },
  { value: "four", label: "4 bedroom" },
  { value: "larger", label: "Larger property" },
];

const linenItems = [
  { key: "bedsheets", label: "Bedsheet sets", price: 2800 },
  { key: "duvetCovers", label: "Duvet covers", price: 3500 },
  { key: "duvets", label: "Full duvets", price: 5000 },
  { key: "bathTowels", label: "Large / bath towels", price: 500 },
  { key: "handTowels", label: "Small / hand towels", price: 250 },
] as const;

type LinenKey = (typeof linenItems)[number]["key"];

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

function OptionGroup<T extends string | number>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={String(o.value)}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.value)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm transition-colors duration-300",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-primary/20 text-primary hover:border-primary/60",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Estimator() {
  const [size, setSize] = useState<Size>("four");
  const [freq, setFreq] = useState<Freq>(1);
  const [linenOn, setLinenOn] = useState(false);
  const [linenFreq, setLinenFreq] = useState<LinenFreq>(1);
  const [qty, setQty] = useState<Record<LinenKey, number>>({
    bedsheets: 0,
    duvetCovers: 0,
    duvets: 0,
    bathTowels: 0,
    handTowels: 0,
  });

  const housekeeping = useMemo<number | "custom" | "contact">(() => {
    if (size === "larger") return "custom";
    if (size === "small") return freq === 1 ? 50000 : "contact";
    return 70000 * freq;
  }, [size, freq]);

  const linenCost = useMemo(() => {
    if (!linenOn) return 0;
    const multiplier = linenFreq === 1 ? 4 : linenFreq === 2 ? 8 : 12;
    return linenItems.reduce((sum, i) => sum + i.price * (qty[i.key] || 0) * multiplier, 0);
  }, [linenOn, linenFreq, qty]);

  const numericHousekeeping = typeof housekeeping === "number";
  const comboApplies = numericHousekeeping && linenOn && linenCost > 0;
  const subtotal = (numericHousekeeping ? housekeeping : 0) + linenCost;
  const discount = comboApplies ? Math.round(subtotal * 0.15) : 0;
  const total = subtotal - discount;

  const headline = numericHousekeeping
    ? naira(total)
    : size === "larger"
      ? "Custom quote - contact us"
      : "Contact us for pricing";

  return (
    <Section id="estimate" className="bg-sand">
      <Eyebrow>How pricing works</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">Estimate your service.</h2>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Pricing is built from two parts - housekeeping and linen - combined at a discount when you
        take both. This is an indicative estimate, not a binding quote.
      </p>
      <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-primary/80">
        Elite Handlers · Monthly service subscription
      </p>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-primary/15 bg-primary/10 lg:grid-cols-[1.15fr_1fr]">
        {/* Controls */}
        <div className="space-y-9 bg-card p-7 sm:p-10">
          <OptionGroup legend="Property size" options={sizeOptions} value={size} onChange={setSize} />
          <OptionGroup
            legend="Housekeeping frequency"
            options={[
              { value: 1 as Freq, label: "1× weekly" },
              { value: 2 as Freq, label: "2× weekly" },
              { value: 3 as Freq, label: "3× weekly" },
            ]}
            value={freq}
            onChange={setFreq}
          />

          <div className="border-t border-border pt-7">
            <div className="flex items-center justify-between gap-4">
              <span id="linen-toggle-label" className="text-sm">
                Add linen service
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={linenOn}
                aria-labelledby="linen-toggle-label"
                onClick={() => setLinenOn((v) => !v)}
                className={cn(
                  "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  linenOn ? "bg-primary" : "bg-primary/20",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-0.5 size-5 rounded-full bg-card transition-transform duration-300",
                    linenOn ? "translate-x-[1.375rem]" : "translate-x-0.5",
                  )}
                />
              </button>
            </div>


            {linenOn && (
              <div className="mt-7 space-y-6">
                <OptionGroup
                  legend="Linen frequency"
                  options={[
                    { value: 1 as LinenFreq, label: "1× weekly" },
                    { value: 2 as LinenFreq, label: "2× weekly" },
                    { value: 3 as LinenFreq, label: "3× weekly" },
                  ]}
                  value={linenFreq}
                  onChange={setLinenFreq}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {linenItems.map((item) => (
                    <div key={item.key} className="flex items-center justify-between gap-3">
                      <label htmlFor={`qty-${item.key}`} className="text-sm text-muted-foreground">
                        {item.label}
                      </label>
                      <input
                        id={`qty-${item.key}`}
                        type="number"
                        inputMode="numeric"
                        min={0}
                        step={1}
                        value={qty[item.key]}
                        onChange={(e) =>
                          setQty((q) => ({
                            ...q,
                            [item.key]: Math.max(0, Math.floor(Number(e.target.value) || 0)),
                          }))
                        }
                        className="w-20 rounded-lg border border-primary/20 bg-background px-3 py-2 text-right text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Estimate */}
        <div className="flex flex-col justify-between gap-8 bg-ink p-7 text-white sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Monthly subscription estimate</p>
            <p
              aria-live="polite"
              className={cn(
                "mt-5 font-[family-name:var(--font-display)] leading-[1.05] text-white",
                numericHousekeeping ? "text-5xl sm:text-6xl" : "text-2xl sm:text-3xl",
              )}
            >
              {headline}
            </p>

            {numericHousekeeping && (
              <dl className="mt-8 space-y-2 text-sm text-white/60">
                <div className="flex justify-between gap-4">
                  <dt>Property care</dt>
                  <dd>{naira(housekeeping)}</dd>
                </div>
                {linenOn && (
                  <div className="flex justify-between gap-4">
                    <dt>Linen service</dt>
                    <dd>{naira(linenCost)}</dd>
                  </div>
                )}
                {comboApplies && (
                  <div className="flex justify-between gap-4 border-t border-white/15 pt-2 text-accent">
                    <dt>Combined rate applied</dt>
                    <dd>−{naira(discount)}</dd>
                  </div>
                )}
              </dl>
            )}

            <p className="mt-8 text-xs leading-relaxed text-white/45">
              Indicative estimate only - all figures are monthly service subscription estimates,
              not one-off service prices. Final pricing is confirmed after a quick property
              assessment. Larger properties, industrial cleaning and project-based work are quoted
              separately.
            </p>
          </div>

          <div>
            <LinkButton to="/contact" className="bg-white text-primary hover:bg-white/90">
              Get my exact quote
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
