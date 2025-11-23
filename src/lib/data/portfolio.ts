import type { ContactInfo, SkillCategory, Experience, Education, Clearance } from '$lib/types';

export const contactInfo: ContactInfo = {
        email: 'msmecum1@gmail.com',
        phone: '(281) 652-6247',
        linkedin: 'https://www.linkedin.com/in/matthew-mecum-94bb1488/',
        github: 'https://github.com/msmecum1'
};

export const skillCategories: SkillCategory[] = [
        {
                title: 'Core Languages & Frameworks',
                skills: [
                        'C# / .NET 9',
                        'Blazor WASM & Server',
                        'Python / PyTorch',
                        'SvelteKit',
                        'React',
                        'Vue',
                        'Node.js',
                        'Java',
                        'R',
                        'MAUI / Flutter'
                ]
        },
        {
                title: 'Cloud, Data & AI',
                skills: [
                        'Azure (App Services, Functions, DevOps)',
                        'Databricks',
                        'Snowflake',
                        'Power BI',
                        'SQL Server',
                        'PostgreSQL',
                        'Machine Learning Pipelines',
                        'Bioinformatics (UniProt, NCBI, Swiss-Model)'
                ]
        },
        {
                title: 'Enterprise Platforms & Tools',
                skills: [
                        'OpenText Content Server 23.4+',
                        'Extended ECM (xECM)',
                        'REST API Design & Security',
                        'Zero Trust Architecture',
                        'Azure DevOps Pipelines',
                        'Git / GitHub',
                        'Jira & Confluence',
                        'Agile / SAFe'
                ]
        },
        {
                title: 'Leadership & Soft Skills',
                skills: [
                        'Technical Team Leadership',
                        'Stakeholder Management',
                        'Risk Assessment & Mitigation',
                        'Change Management',
                        'Mentorship & Code Reviews',
                        'DoD Compliance (RMF, Zero Trust)'
                ]
        }
];

export const experiences: Experience[] = [
        {
                title: 'IT Application Developer (GS-12 Equivalent)',
                company: 'United States Air Force',
                location: 'San Antonio, TX',
                startDate: 'September 2023',
                endDate: 'Present',
                current: true,
                achievements: [
                        'Lead full-stack developer for mission-critical HR and records management systems using .NET 9, Blazor, and OpenText Content Server 23.4+',
                        'Designed and delivered 20+ secure REST APIs with OAuth2/JWT authentication and role-based access control',
                        'Modernized legacy workflows into cloud-native Azure applications, achieving 60%+ performance gains',
                        'Integrated Databricks and Snowflake for real-time analytics and reporting across enterprise datasets',
                        'Championed Zero Trust implementation and RMF compliance for all developed applications',
                        'Author and enforce SDLC governance, including secure CI/CD pipelines in Azure DevOps'
                ]
        },
        {
                title: 'Freelance Software Engineer & Bioinformatician',
                company: 'Independent',
                location: 'Remote',
                startDate: '2021',
                endDate: 'Present',
                current: true,
                achievements: [
                        'Built RAFA — Risk Assessment for Food Allergens: a PyTorch-powered web app analyzing protein homology against known allergens using UniProt and Swiss-Model APIs',
                        'Developed cross-platform Gift Exchange mobile app using .NET MAUI',
                        'Created bioinformatics pipelines for FASTQ/FASTA analysis, multiple sequence alignment, and phylogenetic tree visualization in R',
                        'Designed and deployed production-grade APIs with token auth, rate limiting, and Azure hosting'
                ]
        },
        {
                title: 'Machine Gunner → Team Leader',
                company: 'U.S. Army — 75th Ranger Regiment',
                location: 'Various Global Theaters',
                startDate: '2016',
                endDate: '2022',
                achievements: [
                        'Operated in austere, high-stakes environments requiring rapid decision-making under extreme stress',
                        'Led fire teams in combat operations with 100% mission success and zero friendly casualties under direct leadership',
                        'Developed discipline, ownership, and mission-first mindset that directly translates to software delivery'
                ]
        }
];

export const education: Education[] = [
        {
                degree: 'Master of Biotechnology',
                fieldOfStudy: 'Bioinformatics',
                school: 'University of Maryland Global Campus',
                graduationDate: 'April 2024'
        },
        {
                degree: 'Bachelor of Arts in Biology',
                school: 'Concordia University',
                graduationDate: 'April 2014'
        }
];

export const clearances: Clearance[] = [
        {
                type: 'TS/SCI',
                level: 'Top Secret // Sensitive Compartmented Information',
                adjudicationDate: 'November 29, 2018',
                description: 'Active — Current reinvestigation in progress'
        }
];

export const professionalSummary = `Cleared (TS/SCI) Software Engineer combining deep enterprise .NET expertise with modern cloud, AI, and bioinformatics experience. Currently modernizing mission-critical Air Force systems using .NET 9, OpenText CE, and Azure while leading secure development practices under Zero Trust. Proven ability to deliver complex, compliant solutions from concept through production in regulated environments. Former Army Ranger bringing disciplined execution and leadership under pressure to technical teams.`;

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Riverside Municipal Site",
    description: "A modern, fully responsive, WCAG 2.1-compliant city government portal with emergency alerts, online permits, council agendas, dark mode, and 508 accessibility.",
    tech: ["SvelteKit", "Tailwind CSS", "TypeScript", "Vercel", "Accessibility"],
    liveUrl: "https://riverside-municipal-site.vercel.app",
    githubUrl: "https://github.com/msmecum1/riverside-municipal-site",
    image: "/images/riverside-preview.jpg",   // optional – add screenshot later if you want
    featured: true
  }
];