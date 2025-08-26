// _data/roles.js
module.exports = {
	// canonical keys you'll reference in front matter
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
			businessAnalysis: "Analyse d'affaires",
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
			business: "Groupe des rôles d'affaires",
			author: "Groupe des rôles d'auteurs",
			design: "Groupe des rôles de conception",
			development: "Groupe des rôles de développement",
			testing: "Groupe des rôles de test",
			administration: "Groupe des rôles administratifs",
		},
	},

	// detailed descriptions for groups
	descriptions: {
		en: {
			business: "Business analysts and stakeholders who define requirements, conduct user research, and ensure digital products meet accessibility standards from a strategic perspective.",
			author: "Content creators, writers, and publishers responsible for creating accessible content, including proper document structure, alternative text, and clear language.",
			design: "User experience designers, visual designers, and researchers who create inclusive designs, conduct accessibility testing, and ensure usable interfaces for all users.",
			development: "Front-end and back-end developers who implement accessible code, integrate assistive technologies, and build inclusive digital experiences.",
			testing: "Quality assurance professionals who test for accessibility compliance, conduct automated and manual testing, and ensure products meet WCAG standards.",
			administration: "Project managers, product owners, and governance teams who oversee accessibility strategy, ensure compliance, and manage accessibility initiatives.",
		},
		fr: {
			business: "Analystes d'affaires et parties prenantes qui définissent les exigences, mènent des recherches utilisateur et s'assurent que les produits numériques respectent les normes d'accessibilité d'un point de vue stratégique.",
			author: "Créateurs de contenu, rédacteurs et éditeurs responsables de créer du contenu accessible, incluant une structure de document appropriée, du texte alternatif et un langage clair.",
			design: "Concepteurs d'expérience utilisateur, concepteurs visuels et chercheurs qui créent des conceptions inclusives, effectuent des tests d'accessibilité et garantissent des interfaces utilisables pour tous.",
			development: "Développeurs front-end et back-end qui implémentent du code accessible, intègrent les technologies d'assistance et construisent des expériences numériques inclusives.",
			testing: "Professionnels de l'assurance qualité qui testent la conformité à l'accessibilité, effectuent des tests automatisés et manuels, et s'assurent que les produits respectent les normes WCAG.",
			administration: "Gestionnaires de projet, propriétaires de produit et équipes de gouvernance qui supervisent la stratégie d'accessibilité, assurent la conformité et gèrent les initiatives d'accessibilité.",
		},
	},
};
