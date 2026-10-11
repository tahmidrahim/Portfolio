export const isTodo = (value?: string): boolean => {
  if (!value) return true;
  return value.includes("[" + "TODO");
};

export const isProduction = process.env.NODE_ENV === "production";

/**
 * Returns true if a contact element should be displayed.
 * In development, placeholders are always visible.
 * In production, elements with unresolved content placeholders are hidden.
 */
export const shouldRenderContact = (value?: string): boolean => {
  if (!isProduction) return true;
  return !isTodo(value);
};

/**
 * Safely resolves an external contact link.
 * If the link contains placeholders, returns undefined to prevent broken URLs.
 */
export const getSafeLink = (url?: string): string | undefined => {
  if (isTodo(url)) return undefined;
  return url;
};
