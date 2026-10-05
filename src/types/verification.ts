import type { Product } from "./product";

export type VerificationOutcome = "AUTHENTIC" | "SUSPICIOUS" | "CLONE SUSPECTED" | "NOT FOUND";

export interface VerificationRecord {
  product: Product | null;
  outcome: VerificationOutcome;
  riskScore: number;
  verifiedAt: string;
}