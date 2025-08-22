// _data/roles.js
module.exports = {
	// canonical keys you’ll reference in front matter
	roles: {
		businessAnalysis: { group: "business" },
		contentAuthoring: { group: "author" },
		contentPublishing: { group: "author" },
		uxResearch: { group: "design" },
		uxDesign: { group: "design" },
		visualDesign: { group: "design" },
		frontEndDev: { group: "development" },
		backEndDev: { group: "development" },
		qaAutomated: { group: "testing" },
		qaManual: { group: "testing" },
		productOwnership: { group: "administration" },
		projectManagement: { group: "administration" },
		governance: { group: "administration" },
	},

	// translated labels for roles
	labels: {
		en: {
			businessAnalysis: "Business Analysis",
			contentAuthoring: "Content Authoring",
			contentPublishing: "Content Publishing",
			uxResearch: "User Experience Research",
			uxDesign: "User Experience Design",
			visualDesign: "Visual Design",
			frontEndDev: "Front-End Development",
			backEndDev: "Back-End Development",
			qaAutomated: "Automated QA Testing",
			qaManual: "Manual QA Testing",
			productOwnership: "Product Ownership",
			projectManagement: "Project Management",
			governance: "Governance",
		},
		fr: {
			businessAnalysis: "Analyse d’affaires",
			contentAuthoring: "Rédaction de contenu",
			contentPublishing: "Publication de contenu",
			uxResearch: "Recherche UX",
			uxDesign: "Conception UX",
			visualDesign: "Conception visuelle",
			frontEndDev: "Développement front-end",
			backEndDev: "Développement back-end",
			qaAutomated: "Tests AQ automatisés",
			qaManual: "Tests AQ manuels",
			productOwnership: "Propriété du produit",
			projectManagement: "Gestion de projet",
			governance: "Gouvernance",
		},
	},

	// translated labels for groups
	groups: {
		en: {
			business: "Business Role Group",
			author: "Author Role Group",
			design: "Design Role Group",
			development: "Development Role Group",
			testing: "Testing Role Group",
			administration: "Administration Role Group",
		},
		fr: {
			business: "Groupe des rôles d’affaires",
			author: "Groupe des rôles d’auteurs",
			design: "Groupe des rôles de conception",
			development: "Groupe des rôles de développement",
			testing: "Groupe des rôles de test",
			administration: "Groupe des rôles administratifs",
		},
	},
};
