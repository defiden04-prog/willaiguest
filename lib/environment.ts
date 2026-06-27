import { PUBLISHABLE_KEY, DEMO_KEY } from "@/constants/keys";

export function isV0Environment(): boolean {
  // If the current publishable key matches the demo key,
  // we're in v0 (user hasn't set their own env vars yet)
  return PUBLISHABLE_KEY === DEMO_KEY;
}

export function isProductionEnvironment(): boolean {
  // If the publishable key is different from demo key,
  // user has deployed with their own Clerk keys
  return PUBLISHABLE_KEY !== DEMO_KEY;
}
