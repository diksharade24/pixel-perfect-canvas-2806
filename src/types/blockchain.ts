export interface BlockchainTransaction {
  block: string;
  hash: string;
  timestamp: string;
  event: string;
  productId: string;
  status: "CONFIRMED" | "PENDING";
}