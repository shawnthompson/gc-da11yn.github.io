// Returns path prefix for GitHub Pages deployments
// For main repo: '/'
// For forks: '/repo-name/' (e.g., '/gc-da11yn.github.io/')
module.exports = () => {
  const pathPrefix = process.env.PATH_PREFIX;
  
  if (pathPrefix) {
    // Ensure prefix starts and ends with '/'
    const normalizedPrefix = `/${pathPrefix.replace(/^\/+|\/+$/g, '')}/`;
    return normalizedPrefix;
  }
  
  // Default to root path for main repo
  return '/';
};
