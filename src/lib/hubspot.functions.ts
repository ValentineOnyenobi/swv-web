import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Existing StayWithVantage HubSpot embed configuration (EU1 hublet).
const PORTAL_ID = "148941859";
const FORM_ID = "6de4f4f8-a9eb-4233-b5c7-0a2fe2ee15c3";
const ENDPOINT = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

const schema = z.object({
  firstname: z.string().trim().max(100).optional().default(""),
  lastname: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50).optional().default(""),
  message: z.string().trim().max(4000).optional().default(""),
  interest: z.string().trim().max(100).optional().default(""),
  pageUri: z.string().trim().max(500).optional().default(""),
});

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const fields = [
      { name: "firstname", value: data.firstname },
      { name: "lastname", value: data.lastname },
      { name: "email", value: data.email },
      { name: "phone", value: data.phone },
      {
        name: "message",
        value: data.interest ? `Interested in: ${data.interest}\n\n${data.message}` : data.message,
      },
    ].filter((f) => f.value !== "");

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: data.pageUri || "https://staywithvantage.lovable.app/contact",
          pageName: "Contact — StayWithVantage",
        },
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`HubSpot form submission failed [${res.status}]: ${body}`);
      return { ok: false as const, error: "We couldn't send that just now. Please try WhatsApp or email." };
    }

    return { ok: true as const };
  });
