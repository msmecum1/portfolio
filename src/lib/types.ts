export interface ContactInfo {
	email: string;
	phone: string;
	linkedin: string;
	github: string;
}

export interface SkillCategory {
	title: string;
	skills: string[];
}

export interface Experience {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	achievements: string[];
	current?: boolean;
}

export interface Education {
	degree: string;
	school: string;
	graduationDate: string;
	fieldOfStudy?: string;
}

export interface Clearance {
	type: string;
	level: string;
	adjudicationDate: string;
	description?: string;
}