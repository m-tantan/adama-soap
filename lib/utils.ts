/**
 * Get the base path for the application
 * Always returns empty string for Vercel deployment
 */
export function getBasePath() {
  return '';
}

/**
 * Prepend the base path to a URL
 * @param path - The path to prepend the base path to
 * @returns The path with the base path prepended
 */
export function withBasePath(path: string) {
  return path;
}
