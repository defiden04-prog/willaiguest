// NOTE ON PK:
// This is a non-sensitive key, associated with a Clerk development instance
// with a few options configured, solely for presentation purposes.
// - Waitlist Enabled
export const DEMO_KEY =
  'pk_test_a2V5LW9jdG9wdXMtODMuY2xlcmsuYWNjb3VudHMuZGV2JA';

export const PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || DEMO_KEY;

export const SECRET_KEY = process.env.CLERK_SECRET_KEY;
