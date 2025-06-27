// Returns path prefix for GitHub Pages deployments
// This affects internal links (CSS, JS, href) but NOT file structure
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
