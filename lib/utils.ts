/**
 * Get the base path for the application
 * Set USE_CUSTOM_DOMAIN to match next.config.ts
 * - true: Using custom domain (adamasoaps.com), basePath is empty
 * - false: Using github.io/repo-name, basePath is '/adama-soap'
 */
const USE_CUSTOM_DOMAIN = true;

export function getBasePath() {
  // When using a custom domain, basePath should be empty
  // When using username.github.io/repo-name, basePath should be '/repo-name'
  if (USE_CUSTOM_DOMAIN) {
    return '';
  }
  return process.env.NODE_ENV === 'production' ? '/adama-soap' : '';
}

/**
 * Prepend the base path to a URL
 * @param path - The path to prepend the base path to
 * @returns The path with the base path prepended
 */
export function withBasePath(path: string) {
  if (!path) return path;
  if (path.startsWith('http') || path.startsWith('//')) return path;
  
  const basePath = getBasePath();
  return `${basePath}${path}`;
}
