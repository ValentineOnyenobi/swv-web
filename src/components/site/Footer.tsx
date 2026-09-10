import { Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { contact, footerSecondaryLinks, navLinks } from "@/content/site";
import logoUrl from "@/assets/sv-logo.png";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-white/70 sm:px-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr_1fr_1.1fr] md:gap-10">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center justify-center rounded-xl bg-white p-2.5 ring-1 ring-white/15">
            <img
              src={logoUrl}
              alt="StayWithVantage"
              width={96}
              height={96}
              className="size-12 object-contain"
            />
          </span>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Property operations, simplified.
            <br />
            Automation · Guest Services · Property Care
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col items-start gap-2">
          <p className="text-[0.625rem] uppercase tracking-[0.2em] text-white/40">Explore</p>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="More" className="flex flex-col items-start gap-2">
          <p className="text-[0.625rem] uppercase tracking-[0.2em] text-white/40">More</p>
          {footerSecondaryLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-2 text-sm">
          <p className="text-[0.625rem] uppercase tracking-[0.2em] text-white/40">Contact</p>
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
            {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className="transition-colors hover:text-white">
            {contact.phone}
          </a>
          <span className="cursor-not-allowed text-white/40">Client Login - coming soon</span>
          <div className="mt-1 flex items-center gap-3">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="StayWithVantage on Instagram"
              title="Instagram"
              className="inline-flex size-8 items-center justify-center rounded-full text-white/60 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-7 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:mt-8">
        <span>© {new Date().getFullYear()} StayWithVantage. All rights reserved.</span>
        <span>Property automation · Property care</span>
      </div>
    </footer>
  );
}
