import type { ProductProfile } from "@/lib/types/profile";

/** Escapes special XML characters to prevent injection / parse errors. */
function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Renders the lean ProductProfile as compact XML for Claude system prompts.
 *
 * Design rules:
 * - Empty fields are OMITTED entirely (empty tags are worse than absent tags).
 * - The profile is the *constant* anchor facts about what the rep sells. It's
 *   injected into every generation so downstream prompts feel product-specific
 *   without the user re-typing context each time.
 * - Per-generation specifics (tone, target buyer, named competitor, specific
 *   objection) live on Tool inputs, not here.
 * - Target budget: well under 500 tokens per profile.
 */
export function renderProfileAsXML(p: ProductProfile): string {
  const sections: string[] = [];

  // ── Identity (always present) ──────────────────────────────────────────────
  sections.push(
    `<identity>\n` +
      `  <company_name>${escape(p.company_name)}</company_name>\n` +
      `  <product_name>${escape(p.product_name)}</product_name>` +
      (p.company_url
        ? `\n  <company_url>${escape(p.company_url)}</company_url>`
        : "") +
      (p.product_url
        ? `\n  <product_url>${escape(p.product_url)}</product_url>`
        : "") +
      `\n</identity>`
  );

  // ── Product summary ───────────────────────────────────────────────────────
  if (p.product_summary) {
    sections.push(
      `<product_summary>${escape(p.product_summary)}</product_summary>`
    );
  }

  // ── Key differentiators ───────────────────────────────────────────────────
  if (p.key_differentiators?.length) {
    sections.push(
      `<key_differentiators>\n` +
        p.key_differentiators
          .map((d) => `  <item>${escape(d)}</item>`)
          .join("\n") +
        `\n</key_differentiators>`
    );
  }

  return `<product_profile>\n${sections.join("\n\n")}\n</product_profile>`;
}
