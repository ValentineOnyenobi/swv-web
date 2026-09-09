import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/content/site";
import logoUrl from "@/assets/sv-logo.png";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <Link to="/" onClick={close} aria-label="StayWithVantage - home" className="min-w-0">
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-full bg-white p-1.5 shadow-sm transition-shadow sm:p-2",
              scrolled || open ? "ring-1 ring-border" : "ring-1 ring-white/40",
            )}
          >
            <img
              src={logoUrl}
              alt="StayWithVantage"
              width={64}
              height={64}
              className="size-9 object-contain sm:size-11"
            />
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={close}
              activeOptions={{ exact: link.to === "/" }}
              className={cn(
                "text-sm transition-opacity hover:opacity-60",
                scrolled ? "text-foreground" : "text-white/90",
              )}
              activeProps={{ className: "underline underline-offset-4" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={close}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm tracking-wide transition-colors",
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-ink"
                : "bg-white text-primary hover:bg-white/90",
            )}
          >
            Get Started
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3 lg:hidden">
          <Link
            to="/contact"
            onClick={close}
            className={cn(
              "rounded-full px-4 py-2 text-xs tracking-wide transition-colors",
              scrolled || open ? "bg-primary text-primary-foreground" : "bg-white text-primary",
            )}
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn("p-1", scrolled || open ? "text-foreground" : "text-white")}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-5 pb-8 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={close}
              className="block w-full border-b border-border/60 py-4 text-left font-[family-name:var(--font-display)] text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
