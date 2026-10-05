import type { Product, RiskFactors } from "@/types/product";

export const calculateRisk = (product: Product): number =>
  Math.min(100, Object.values(product.riskFactors).reduce((total, value) => total + value, 0));

export function describeRisk(score: number): string {
  if (score >= 80) return "CRITICAL";
  if (score >= 60) return "HIGH";
  if (score >= 30) return "MEDIUM";
  return "LOW";
}

export const riskFactorRows = (factors: RiskFactors) => [
  { label: "Location anomaly", value: factors.location, max: 30 },
  { label: "Duplicate scans", value: factors.duplicateScans, max: 25 },
  { label: "Travel anomaly", value: factors.travel, max: 20 },
  { label: "Supply-chain mismatch", value: factors.supplyChain, max: 15 },
  { label: "Scan frequency", value: factors.frequency, max: 10 },
];