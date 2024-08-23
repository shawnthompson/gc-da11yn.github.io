const blc = require('broken-link-checker');
const fs = require('fs');

// Read the port from the .eleventy-port file
const port = fs.readFileSync('.eleventy-port', 'utf8');
const siteUrl = `http://localhost:${port}`;

const brokenLinks = [];

const siteChecker = new blc.SiteChecker(
	{
		excludeExternalLinks: true,  // Exclude external links from checking
		filterLevel: 1,  // Level of filtering, can adjust based on need
	},
	{
		link: (result) => {
			if (result.broken) {
				brokenLinks.push({
					page: result.base.original,
					link: result.url.original,
					linkText: result.html.text || 'N/A',  // Captures the link text
					status: result.http.response && result.http.response.statusCode ? result.http.response.statusCode : 'N/A',
					statusText: result.http.response && result.http.response.statusMessage ? result.http.response.statusMessage : 'N/A'
				});
			}
		},
		end: () => {
			if (brokenLinks.length > 0) {
				fs.writeFileSync('./broken-links.json', JSON.stringify(brokenLinks, null, 2));
				console.log(`Broken links found! See broken-links.json for details.`);
			} else {
				console.log('No broken links found.');
			}
		},
	}
);

siteChecker.enqueue(siteUrl);
