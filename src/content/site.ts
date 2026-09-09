// ---------------------------------------------------------------------------
// All editable site content lives here. Swap text, images and links freely.
// ---------------------------------------------------------------------------
import heroSuite from "@/assets/hero-suite.jpg";
import housekeepingTeam from "@/assets/housekeeping-team.jpg";
import platformQr from "@/assets/platform-qr.jpg";
import linen from "@/assets/linen.jpg";
import industrial from "@/assets/industrial.jpg";
import ctaProperty from "@/assets/cta-property.jpg";
import statement from "@/assets/statement.jpg";
import housekeepingDetail from "@/assets/housekeeping-detail.jpg";
import epCare from "@/assets/ep-care.jpg";
import audHotels from "@/assets/aud-hotels.jpg";
import audServicedApartments from "@/assets/aud-serviced-apartments.jpg";
import audShortLets from "@/assets/aud-short-lets.jpg";
import audPropertyManagers from "@/assets/aud-property-managers.jpg";
import audCorporate from "@/assets/aud-corporate.jpg";
import audCommercial from "@/assets/aud-commercial.jpg";
import audIndustrial from "@/assets/aud-industrial.jpg";
import flowGuest from "@/assets/flow-01-guest.jpg";
import flowCapture from "@/assets/flow-02-capture.jpg";
import flowRoute from "@/assets/flow-03-route.jpg";
import flowTrack from "@/assets/flow-04-track.jpg";
import flowVisibility from "@/assets/flow-05-visibility.jpg";

export const images = {
  hero: heroSuite,
  housekeepingTeam,
  platformQr,
  linen,
  industrial,
  ctaProperty,
  statement,
  housekeepingDetail,
  flowCapture,
  flowTrack,
};

export const contact = {
  email: "hello@staywithvantage.com",
  phone: "+234 803 175 5479",
  instagram: "https://www.instagram.com/elitehandlers?igsi=ZmN4dmk5NTg5bjQ0",
};

export const whatsappHref = "https://wa.me/message/JXSLW6LDB6WIJ1";

export const modelStatement = "Technology coordinates the operation. People deliver the work.";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Automation", to: "/automation" },
  { label: "Property Care", to: "/property-care" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerSecondaryLinks = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
];

/* --------------------------- Home: what do you need? --------------------- */
export const servicePaths = [
  {
    id: "automation",
    title: "Automate my property",
    copy: "Digital operations, guest requests, task routing & reporting.",
    cta: "Explore automation",
    to: "/automation",
    image: platformQr,
    alt: "Guest scanning a property QR code with a phone",
  },
  {
    id: "property-care",
    title: "Take care of my property",
    copy: "Housekeeping, cleaning, linen & property care.",
    cta: "Explore property care",
    to: "/property-care",
    image: housekeepingTeam,
    alt: "Housekeeping team preparing a suite",
  },
  {
    id: "both",
    title: "Both",
    copy: "Technology + operational team working together.",
    cta: "See how it works",
    to: "#how-it-works",
    image: statement,
    alt: "Serviced apartment living room in warm daylight",
  },
];

export const howItWorks = [
  {
    step: "01",
    stage: "Capture",
    title: "Request captured",
    copy: "A guest or staff member submits an issue or service request.",
    image: flowGuest,
    alt: "Guest scanning a QR code card with a phone in a serviced apartment",
  },
  {
    step: "02",
    stage: "Route",
    title: "Task created & routed",
    copy: "The request is logged and directed to the appropriate person or team.",
    image: flowRoute,
    alt: "Operations screen routing a request to the right team",
  },
  {
    step: "03",
    stage: "Deliver",
    title: "Work completed",
    copy: "Your own team or Elite Handlers carries out the work.",
    image: housekeepingTeam,
    alt: "Housekeeping team servicing a room",
  },
  {
    step: "04",
    stage: "Visibility",
    title: "Manager visibility",
    copy: "See what is open, in progress and completed, with information available for reporting.",
    image: flowVisibility,
    alt: "Laptop dashboard listing property requests and their statuses",
  },
];

/* ------------------------------ Property Care ---------------------------- */
export const handlerServices = [
  {
    title: "Housekeeping",
    copy: "Property care, not just cleaning - we observe and report condition, not only tidy it.",
    image: housekeepingDetail,
  },
  {
    title: "Linen & Bedsheets Management",
    copy: "Collect, wash, dry, iron and rotate on a set schedule.",
    image: linen,
  },
  {
    title: "Turnover Cleaning",
    copy: "Units reset between guests, to the same standard every time.",
    image: housekeepingTeam,
  },
  {
    title: "Deep Cleaning",
    copy: "Periodic detailed cleaning that keeps the property in condition.",
    image: epCare,
  },
  {
    title: "Industrial Cleaning",
    copy: "Commercial, warehouse, factory and facility work - contract based.",
    image: industrial,
  },
  {
    title: "Project-Based Cleaning",
    copy: "Post-construction, pre-opening and one-off projects, quoted per scope.",
    image: audCommercial,
  },
  {
    title: "Property Care & Quality Checks",
    copy: "Structured checks so issues are recorded before guests find them.",
    image: statement,
  },
];

/* -------------------------------- Automation ----------------------------- */
export const automationCapabilities = [
  "Guest request capture",
  "QR codes",
  "Digital forms",
  "Task creation",
  "Automated routing",
  "Property-specific workflows",
  "Staff & team assignment",
  "Status tracking",
  "Operational dashboards",
  "Reporting",
  "Recurring issue visibility",
];

export const automationOutcomes = [
  {
    title: "Fewer repeat questions",
    copy: "Guests and staff get a clear way to request information or services without repeatedly calling or messaging the team.",
  },
  {
    title: "One scan replaces five phone calls",
    copy: "QR-based request capture gives guests a direct route to the right service.",
  },
  {
    title: "Nothing falls through the cracks between shifts",
    copy: "Requests stay logged and visible instead of depending on someone remembering to pass them on.",
  },
  {
    title: "Stockouts caught before the guest notices",
    copy: "Operational requests and recurring issues can be tracked before they become guest-facing problems.",
  },
  {
    title: "Proof of condition, every visit",
    copy: "Structured reporting and records create visibility around inspections and property condition.",
  },
  {
    title: "Clear ownership",
    copy: "No more \u201cI thought someone else had it.\u201d Tasks carry clear ownership and status.",
  },
];

export const exampleWorkflow = [
  "Guest reports an issue",
  "Request logged",
  "Task assigned",
  "Team responds",
  "Task completed",
  "Manager sees the result",
];

export const bothFlow = [
  "Request captured",
  "StayWithVantage platform",
  "Task routed",
  "Elite Handlers or your own team",
  "Work completed",
  "Manager visibility & reporting",
];

/* ---------------------------------- About -------------------------------- */
export const whoWeServe = [
  {
    title: "Hotels & Guesthouses",
    copy: "For operators looking to improve guest requests, housekeeping workflows and operational coordination.",
    image: audHotels,
    alt: "Boutique hotel lobby at dusk",
  },
  {
    title: "Short-Lets & Serviced Apartments",
    copy: "For operators managing multiple units, buildings or locations.",
    image: audServicedApartments,
    alt: "Serviced apartment living space in warm daylight",
  },
  {
    title: "Property Owners & Managers",
    copy: "For owners and managers who want professional property care, better systems, or both.",
    image: audPropertyManagers,
    alt: "Property management desk with floorplans and keys",
  },
];

export const whyPoints = [
  {
    title: "Clear model",
    copy: "Automation, property care, or both - choose the setup that fits your operation.",
  },
  {
    title: "Built for scale",
    copy: "Use the same operating framework as you add properties, units and teams.",
  },
  {
    title: "Fewer missed requests",
    copy: "Requests are captured, tracked and visible instead of getting lost across messages and conversations.",
  },
  {
    title: "Faster resolutions",
    copy: "Tasks can be routed directly to the appropriate person or team.",
  },
  {
    title: "Data-driven management",
    copy: "Gain visibility into response times, bottlenecks, recurring issues and operational performance.",
  },
  {
    title: "Flexible execution",
    copy: "Use your own team, Elite Handlers, or a combination of both.",
  },
];

export const reassurances = [
  "We do not acquire guests for you.",
  "We do not set your pricing.",
  "We do not manage your revenue.",
  "We do not replace your team.",
];

export const trustPoints = [
  { title: "Vetted & trained staff", copy: "Screened, inducted and supervised." },
  { title: "Consistent reporting", copy: "The same standard of record, every visit." },
  { title: "Insurance & bonding", copy: "Placeholder - cover details to be added." },
];

export const testimonials = [
  {
    quote: "Our turnovers stopped being a daily negotiation. Everything is logged and visible.",
    name: "Operations Manager",
    org: "Serviced apartments",
  },
  {
    quote: "The reporting alone changed how we plan maintenance across the building.",
    name: "General Manager",
    org: "Boutique hotel",
  },
  {
    quote: "Our own team still runs the property - they just finally have a system.",
    name: "Portfolio Manager",
    org: "Short-let operator",
  },
];

export const audiences = [
  { label: "Hotels", image: audHotels, alt: "Boutique hotel lobby at dusk" },
  { label: "Serviced Apartments", image: audServicedApartments, alt: "Serviced apartment living space in warm daylight" },
  { label: "Short-Lets", image: audShortLets, alt: "Short-let bedroom with fresh linen and keys" },
  { label: "Property Managers", image: audPropertyManagers, alt: "Property management desk with floorplans and keys" },
  { label: "Corporate Accommodation", image: audCorporate, alt: "Corporate long-stay apartment with desk and city view" },
  { label: "Commercial", image: audCommercial, alt: "Commercial office lobby with stone and glass" },
  { label: "Industrial", image: audIndustrial, alt: "Industrial facility cleaning in progress" },
];

export const interestOptions = ["Automation", "Property Care", "Both"] as const;
