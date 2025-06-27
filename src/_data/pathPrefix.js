// Returns "/" (prod) or "/gc-da11yn.github.io/" (fork builds).
module.exports = () => {
  const p = process.env.PATH_PREFIX || '';
  return p ? `/${p.replace(/^\/|\/$/g, '')}/` : '/';
};
