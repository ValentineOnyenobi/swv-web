import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContactEnquiry } from "@/lib/hubspot.functions";
import { interestOptions } from "@/content/site";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

const labelClass = "block text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground";

export function HubSpotForm({ defaultInterest }: { defaultInterest?: string | undefined }) {
  const submit = useServerFn(submitContactEnquiry);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    setError(null);
    try {
      const res = await submit({
        data: {
          firstname: String(fd.get("firstname") ?? ""),
          lastname: String(fd.get("lastname") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          message: String(fd.get("message") ?? ""),
          interest: String(fd.get("interest") ?? ""),
          pageUri: typeof window !== "undefined" ? window.location.href : "",
        },
      });
      if (res.ok) {
        setState("sent");
        form.reset();
      } else {
        setState("idle");
        setError(res.error);
      }
    } catch {
      setState("idle");
      setError("Something went wrong. Please try WhatsApp or email.");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
        <p className="text-base">Thank you — your enquiry is with us.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll come back to you shortly, usually the same day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="firstname">
            First name
          </label>
          <input id="firstname" name="firstname" type="text" autoComplete="given-name" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="lastname">
            Last name
          </label>
          <input id="lastname" name="lastname" type="text" autoComplete="family-name" className={fieldClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone number
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="interest">
          Interested in
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue={defaultInterest ?? ""}
          className={fieldClass}
        >
          <option value="">Select an option</option>
          {interestOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={fieldClass} />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-xs tracking-[0.16em] uppercase text-primary-foreground transition-colors hover:bg-ink disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
