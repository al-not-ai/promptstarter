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
 * Renders a ProductProfile as structured XML suitable for Claude system prompts.
 *
 * Design rules (from product-profile-spec.md §4):
 * - Empty fields are OMITTED entirely — empty tags are worse than absent tags
 * - Constants live in the system prompt; Variables live in the user message
 * - Target token budget: ≤ 1000 tokens per profile
 */
export function renderProfileAsXML(p: ProductProfile): string {
  const sections: string[] = [];

  // ── Identity (always present) ──────────────────────────────────────────────
  sections.push(
    `<identity>\n` +
      `  <company_name>${escape(p.company_name)}</company_name>\n` +
      `  <product_name>${escape(p.product_name)}</product_name>` +
      (p.technical_category
        ? `\n  <category>${escape(p.technical_category)}</category>`
        : "") +
      (p.company_url ? `\n  <url>${escape(p.company_url)}</url>` : "") +
      `\n</identity>`
  );

  // ── Positioning ────────────────────────────────────────────────────────────
  if (p.one_liner || p.core_value_prop) {
    sections.push(
      `<positioning>` +
        (p.one_liner
          ? `\n  <one_liner>${escape(p.one_liner)}</one_liner>`
          : "") +
        (p.core_value_prop
          ? `\n  <value_prop>${escape(p.core_value_prop)}</value_prop>`
          : "") +
        `\n</positioning>`
    );
  }

  // ── Differentiators ────────────────────────────────────────────────────────
  if (p.key_differentiators?.length) {
    sections.push(
      `<differentiators>\n` +
        p.key_differentiators
          .map((d) => `  <item>${escape(d)}</item>`)
          .join("\n") +
        `\n</differentiators>`
    );
  }

  // ── Use cases ─────────────────────────────────────────────────────────────
  if (p.primary_use_cases?.length) {
    sections.push(
      `<use_cases>\n` +
        p.primary_use_cases
          .map((u) => `  <item>${escape(u)}</item>`)
          .join("\n") +
        `\n</use_cases>`
    );
  }

  // ── Market segments ────────────────────────────────────────────────────────
  if (p.target_market_segments?.length) {
    sections.push(
      `<market_segments>\n` +
        p.target_market_segments
          .map((s) => `  <item>${escape(s)}</item>`)
          .join("\n") +
        `\n</market_segments>`
    );
  }

  // ── Competitors ────────────────────────────────────────────────────────────
  if (p.competitors?.length) {
    sections.push(
      `<competitors>\n` +
        p.competitors.map((c) => `  <item>${escape(c)}</item>`).join("\n") +
        `\n</competitors>`
    );
  }

  // ── Integrations ───────────────────────────────────────────────────────────
  if (p.integrations?.length) {
    sections.push(
      `<integrations>\n` +
        p.integrations.map((i) => `  <item>${escape(i)}</item>`).join("\n") +
        `\n</integrations>`
    );
  }

  // ── Proof points ──────────────────────────────────────────────────────────
  if (p.proof_points?.length) {
    sections.push(
      `<proof_points>\n` +
        p.proof_points
          .map(
            (pp) =>
              `  <proof type="${pp.type}">\n` +
              `    <label>${escape(pp.label)}</label>` +
              (pp.detail
                ? `\n    <detail>${escape(pp.detail)}</detail>`
                : "") +
              `\n  </proof>`
          )
          .join("\n") +
        `\n</proof_points>`
    );
  }

  // ── Objection handlers ────────────────────────────────────────────────────
  if (p.objection_handlers?.length) {
    sections.push(
      `<objection_handlers>\n` +
        p.objection_handlers
          .map(
            (o) =>
              `  <pair>\n` +
              `    <objection>${escape(o.objection)}</objection>\n` +
              `    <response>${escape(o.response)}</response>\n` +
              `  </pair>`
          )
          .join("\n") +
        `\n</objection_handlers>`
    );
  }

  // ── Tone ──────────────────────────────────────────────────────────────────
  if (p.tone_of_voice) {
    sections.push(`<tone_of_voice>${escape(p.tone_of_voice)}</tone_of_voice>`);
  }

  // ── Founder story ─────────────────────────────────────────────────────────
  if (p.founder_story) {
    sections.push(
      `<founder_story>${escape(p.founder_story)}</founder_story>`
    );
  }

  return `<product_profile>\n${sections.join("\n\n")}\n</product_profile>`;
}
