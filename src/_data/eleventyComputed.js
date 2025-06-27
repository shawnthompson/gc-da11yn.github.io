const pathPrefix = require('./pathPrefix')(); // resolve once per build

module.exports = {
	rootPath(data) {
		const relative = data.page.url
			.split('/')
			.filter(Boolean)
			.map(() => '../')
			.join('');
		return pathPrefix + relative;
	},
	eleventyExcludeFromCollections(data) {
		return data.archived === true;
	}
};
