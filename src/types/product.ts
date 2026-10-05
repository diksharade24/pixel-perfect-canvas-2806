export type ProductStatus = "AUTHENTIC" | "SUSPICIOUS" | "CLONE SUSPECTED";

export interface RiskFactors {
  location: number;
  duplicateScans: number;
  travel: number;
  supplyChain: number;
  frequency: number;
}

export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  batch: string;
  manufactured: string;
  serial: string;
  status: ProductStatus;
  riskFactors: RiskFactors;
  recentScans: string[];
  transaction: string;
}