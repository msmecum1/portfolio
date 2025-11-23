import type { ContactInfo, SkillCategory, Experience, Education, Clearance } from '$lib/types';

export const contactInfo: ContactInfo = {
	email: 'msmecum1@gmail.com',
	phone: '(281) 652-6247',
	linkedin: 'https://www.linkedin.com/in/matthew-mecum-94bb1488/',
	github: 'https://github.com/msmecum1'
};

export const skillCategories: SkillCategory[] = [
	{
		title: 'Languages & Frameworks',
		skills: [
			'.NET Core',
			'C#',
			'Blazor WASM',
			'Python',
			'JavaScript',
			'React',
			'Vue',
			'SvelteKit',
			'Node.js',
			'Java',
			'R'
		]
	},
	{
		title: 'Cloud & Data Platforms',
		skills: [
			'Databricks',
			'Snowflake',
			'Azure',
			'AWS',
			'SQL Server',
			'PostgreSQL',
			'Oracle RDBMS',
			'Power BI',
			'Firestore'
		]
	},
	{
		title: 'Enterprise & DevOps',
		skills: [
			'REST APIs',
			'Zero Trust Architecture',
			'DevOps Pipelines',
			'Git',
			'Azure DevOps',
			'Jira',
			'Agile/Scrum',
			'Systems Engineering'
		]
	},
	{
		title: 'Leadership & Management',
		skills: [
			'Team Mentorship',
			'Performance Evaluations',
			'Vendor Oversight',
			'Conflict Resolution',
			'Change Management',
			'Risk Planning'
		]
	}
];

export const experiences: Experience[] = [
	{
		title: 'IT Application Developer',
		company: 'United States Air Force',
		location: 'San Antonio, TX',
		startDate: 'September 2023',
		endDate: 'Present',
		current: true,
		achievements: [
			'Lead developer for multiple enterprise-level .NET web applications supporting critical USAF HR and organizational workflows',
			'Designed and implemented 14+ secure REST APIs with full CRUD functionality, integrating complex backend logic and authentication mechanisms',
			'Developed data transformation pipelines and analytics features using Databricks and Snowflake, optimizing reporting and data access across teams',
			'Applied enterprise architecture principles to modernize legacy systems for cloud compatibility, improving performance and maintainability',
			'Collaborated cross-functionally with data modelers, architects, and stakeholders to drive software requirements and design',
			'Authored and enforced multiple SOPs for SDLC processes, including secure development and deployment pipelines',
			'Participated in Zero Trust architecture efforts to ensure compliance with DoD cybersecurity policies'
		]
	},
	{
		title: 'Freelance Software Developer',
		company: 'Independent Contractor',
		location: 'Remote',
		startDate: 'January 2021',
		endDate: 'Present',
		current: true,
		achievements: [
			'Built a Blazor WASM web application to analyze food allergen risks using UNIPROT data and Swiss-MODEL APIs',
			'Created and deployed secure APIs with token-based authentication and cloud-readiness considerations',
			'Developed bioinformatics tools to convert and analyze FASTQ/FASTA data and perform MSA using NCBI toolkits',
			'Modeled relational schemas using Oracle RDBMS and designed complex transactional queries',
			'Visualized genetic relationship trees using R for Fasta datasets; exported analytics to Power BI reports',
			'Built responsive front-end components using React, Vue, and SvelteKit for various projects and applications'
		]
	},
	{
		title: 'Machine Gunner',
		company: 'United States Army, 75th Ranger Regiment',
		location: 'Various Locations',
		startDate: 'September 2016',
		endDate: 'April 2022',
		achievements: [
			'Operated in high-pressure, high-responsibility environments; served as tactical lead for heavy weapon systems',
			'Led risk mitigation in mission execution; ensured target prioritization minimized collateral damage',
			'Experience instilled discipline, leadership, and mission-oriented execution under stress'
		]
	}
];

export const education: Education[] = [
	{
		degree: 'Master of Biotechnology',
		fieldOfStudy: 'Bioinformatics',
		school: 'University of Maryland',
		graduationDate: 'April 2024'
	},
	{
		degree: 'Bachelor of Arts',
		fieldOfStudy: 'Biology',
		school: 'Concordia University',
		graduationDate: 'April 2014'
	}
];

export const clearances: Clearance[] = [
	{
		type: 'TS-SCI',
		level: 'Top Secret - Sensitive Compartmented Information',
		adjudicationDate: 'November 29, 2018',
		description: 'Active clearance with current investigation'
	},
	{
		type: 'S-SCI',
		level: 'Secret - Sensitive Compartmented Information',
		adjudicationDate: 'December 4, 2014',
		description: 'Background investigation: SSBI-T5'
	}
];

export const professionalSummary = `Results-driven Software Engineer with over 5 years of experience designing, developing, and implementing complex enterprise software solutions using .NET, C#, and modern web technologies. Strong background in building scalable APIs, integrating data pipelines with Databricks and Snowflake, and modernizing legacy systems within secure, regulated environments. Leads cross-functional development teams, collaborating with business and technical stakeholders, and delivering high-impact solutions from end to end. Skilled in enterprise architecture, change management, and secure application design following Zero Trust principles.`;
