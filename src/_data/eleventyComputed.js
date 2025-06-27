const pathPrefix = require('./pathPrefix')(); // resolve once per build

module.exports = {
	rootPath(data) {
		// For GitHub Pages, use the pathPrefix directly instead of relative paths
		// This ensures consistent behavior for both main repo and forks
		return pathPrefix;
	},
	eleventyExcludeFromCollections(data) {
		return data.archived === true;
	}
};
