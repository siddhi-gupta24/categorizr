// Shared app configuration. Read env-driven values here, not in components.

// Public marketing website (where "LAUNCH APP" lives). Override with VITE_MARKETING_URL.
export const MARKETING_URL = (
  import.meta.env.VITE_MARKETING_URL || "https://categorizr.com"
).replace(/\/+$/, "");

// Display label for the marketing site, e.g. "categorizr.com".
export const MARKETING_HOST = MARKETING_URL.replace(/^https?:\/\//i, "");
