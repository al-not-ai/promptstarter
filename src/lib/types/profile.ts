/**
 * Product Profile types.
 *
 * Profiles are product-scoped, not company-scoped. A rep at a multi-product
 * company (e.g. Salesforce) sells one of many products to one of many markets;
 * this profile matches their specific product or product group.
 *
 * User-facing fields — the rep fills these out or edits them:
 *   - company_name          "Salesforce"
 *   - product_name          "Sales Cloud" (can be a specific product or a product line)
 *   - product_summary       One sentence on what it does
 *   - key_differentiators   2–3 short phrases on what makes it stand out
 *
 * Metadata — captured automatically by the research flow, rarely user-edited:
 *   - company_url           Company homepage
 *   - product_url           The page we researched against (source of truth for re-research)
 *   - is_default            One default profile per user
 *   - research_status       Lifecycle state
 *
 * This schema is intentionally lean. Tone of voice, target buyer, competitors,
 * and objections now live at the Tool level (per-generation inputs), not on
 * the profile — they shift per-call and would stale out if locked in here.
 */
export type ResearchStatus =
  | "draft"
  | "researching"
  | "ready"
  | "failed"
  | "user_edited";

export interface ProductProfile {
  id: string;
  user_id: string;

  // User-facing fields
  company_name: string;
  product_name: string;
  product_summary: string | null;
  key_differentiators: string[];

  // Metadata captured during research
  company_url: string | null;
  product_url: string | null;

  // Lifecycle & multiplicity
  is_default: boolean;
  research_status: ResearchStatus;

  // Timestamps & soft delete
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
