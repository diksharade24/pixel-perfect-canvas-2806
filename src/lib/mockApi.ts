import { products, demoTransactions, recentActivity } from "./mockData";
import { calculateRisk } from "./riskEngine";

export const getProducts = () => products;
export const getProduct = (productId: string) => products.find((product) => product.id.toLowerCase() === productId.trim().toLowerCase());
export const verifyProduct = (productId: string) => {
  const product = getProduct(productId);
  return { product: product ?? null, riskScore: product ? calculateRisk(product) : 0, verifiedAt: "Just now" };
};
export const getVerificationHistory = (_productId?: string) => recentActivity;
export const getProvenance = (productId: string) => ({
  product: getProduct(productId),
  nodes: ["Manufacturer", "Distribution hub", "Retail partner", "Verified customer"],
});
export const getBlockchainTransactions = (_productId?: string) => demoTransactions;
export const getRiskAnalysis = (productId: string) => {
  const product = getProduct(productId);
  return product ? { product, riskScore: calculateRisk(product) } : null;
};