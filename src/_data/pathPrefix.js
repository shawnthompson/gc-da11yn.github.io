// Returns "/" for all GitHub Pages deployments (both main repo and forks).
// GitHub Pages automatically handles the repo path for forks.
module.exports = () => {
  // For GitHub Pages deployments, always return root path
  // GitHub automatically serves forks at username.github.io/repo-name/
  return '/';
};
