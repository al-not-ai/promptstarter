export interface ProofPoint {
  type: "case_study" | "logo" | "metric";
  label: string;
  detail?: string;
  url?: string;
}

export interface ObjectionHandler {
  objection: string;
  response: string;
}

export type ResearchStatus =
  | "draft"
  | "researching"
  | "ready"
  | "failed"
  | "user_edited";

export interface ProductProfile {
  id: string;
  user_id: string;

  // Identity
  company_name: string;
  company_url: string | null;
  product_name: string;
  technical_category: string | null;

  // Positioning
  one_liner: string | null;
  core_value_prop: string | null;
  tone_of_voice: string | null;
  founder_story: string | null;

  // Arrays
  key_differentiators: string[];
  primary_use_cases: string[];
  target_market_segments: string[];
  competitors: string[];
  integrations: string[];

  // JSONB
  proof_points: ProofPoint[];
  objection_handlers: ObjectionHandler[];

  pricing_model: string | null;

  // UX / multiplicity
  is_default: boolean;

  // Research provenance
  research_status: ResearchStatus;
  research_confidence: number | null;

  // Versioning & timestamps
  version: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
