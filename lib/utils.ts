/**
 * Get the base path for the application
 * In production, this returns the configured basePath
 * In development, this returns an empty string
 */
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/adama-soap' : '';
}

/**
 * Prepend the base path to a URL
 * @param path - The path to prepend the base path to
 * @returns The path with the base path prepended
 */
export function withBasePath(path: string) {
  
  return path;
}
