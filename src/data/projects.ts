// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "old-dshcacg",
		title: "大上海萌资讯",
		description: "服务于郑州·大上海城二次元文化交流群的官网。",
		image: "https://dshcacg.roka.ink/_astro/2year.DTYJXpCA_Z1sfpWz.webp",
		category: "web",
		techStack: ["Node.js", "PWA"],
		status: "completed",
		sourceCode: "", // 更改为GitHub链接
		visitUrl: "https://dshcacg.roka.ink", // 添加前往项目链接
		startDate: "2025-08-20",
		featured: false,
		tags: ["资讯站", "ACGN", "郑州"],
	},
	{
		id: "amine-tip",
		title: "追番订阅与分享",
		description: "一键订阅番剧并追番提醒，并导出为图片与朋友分享。",
		image: "",
		category: "mobile",
		techStack: ["HTML5", "PWA"],
		status: "planned",
		sourceCode: "", // 更改为GitHub链接
		visitUrl: "", // 添加前往项目链接
		startDate: "2026-04-03",
		featured: false,
		tags: ["追番", "交友"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
