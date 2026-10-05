import type { Product } from "@/types/product";
import type { BlockchainTransaction } from "@/types/blockchain";

export const products: Product[] = [
  {
    id: "VC-NIKE-001", name: "Nike Air Max 2026", manufacturer: "Nike", batch: "B2026-091",
    manufactured: "05 Sep 2026", serial: "NK-A26-0091842", status: "AUTHENTIC",
    riskFactors: { location: 3, duplicateScans: 2, travel: 1, supplyChain: 2, frequency: 4 },
    recentScans: ["Portland · 12 min ago", "San Francisco · 2 hr ago"], transaction: "0x7a91…e82c",
  },
  {
    id: "VC-APPLE-002", name: "Apple Watch Series 11", manufacturer: "Apple", batch: "AW-S11-204",
    manufactured: "18 Aug 2026", serial: "AW11-4209816", status: "AUTHENTIC",
    riskFactors: { location: 5, duplicateScans: 3, travel: 4, supplyChain: 2, frequency: 4 },
    recentScans: ["Cupertino · 38 min ago", "San Jose · yesterday"], transaction: "0x4c30…a921",
  },
  {
    id: "VC-SONY-003", name: "Sony WH-1000XM6", manufacturer: "Sony", batch: "WH6-77A",
    manufactured: "22 Jul 2026", serial: "SN-WH6-779203", status: "SUSPICIOUS",
    riskFactors: { location: 20, duplicateScans: 15, travel: 18, supplyChain: 8, frequency: 6 },
    recentScans: ["Singapore · 4 min ago", "London · 21 min ago", "Singapore · 3 hr ago"], transaction: "0x2f81…bc09",
  },
  {
    id: "VC-FAKE-999", name: "Air Max 2026 · unverified unit", manufacturer: "Unknown", batch: "UNREGISTERED",
    manufactured: "Unknown", serial: "XX-000-9999", status: "CLONE SUSPECTED",
    riskFactors: { location: 30, duplicateScans: 25, travel: 20, supplyChain: 15, frequency: 4 },
    recentScans: ["Pune · 09:12", "Mumbai · 09:27", "Delhi · 09:34"], transaction: "0x91dc…5e18",
  },
];

export const demoTransactions: BlockchainTransaction[] = products.map((product, index) => ({
  block: `18,42${index + 1}`,
  hash: product.transaction,
  timestamp: `${index + 1} min ago`,
  event: index === 0 ? "Product verified" : index === 3 ? "Clone alert raised" : "Identity confirmed",
  productId: product.id,
  status: "CONFIRMED",
}));

export const recentActivity = [
  { productId: "VC-NIKE-001", time: "2 min ago", place: "Portland, US" },
  { productId: "VC-APPLE-002", time: "8 min ago", place: "San Jose, US" },
  { productId: "VC-SONY-003", time: "15 min ago", place: "Singapore" },
  { productId: "VC-FAKE-999", time: "23 min ago", place: "Delhi, IN" },
];