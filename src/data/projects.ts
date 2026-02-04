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
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "old-dshcacg",
		title: "旧版 大上海城二次元交流群网站",
		description:
			"服务于郑州·大上海城二次元文化交流群的宣传官网(已停止更新)，由管理层企划并作为一周年纪念特别礼送给所有的郑州二次元老师们。该网站拥有介绍、公告、分享、社区等功能。",
		image: "",
		category: "web",
		techStack: ["HTML5", "JavaScript", "CSS"],
		status: "completed",
		sourceCode: "https://github.com/dshcacg/acg/", // 更改为GitHub链接
		visitUrl: "https://dshcacg.fun", // 添加前往项目链接
		startDate: "2025-08-20",
		endDate: "2025-10-01",
		featured: false,
		tags: ["静态网站", "社区","ACGN"],
	},
	{
		id: "new-dshcacg",
		title: "新版 郑州大上海城ACGN文化交流站",
		description:
			"服务于郑州·大上海城二次元文化交流群的全新论坛型网站，由官网管理琥夏(Roka)老师负责制作，预计将于两周年当日上线。",
		image: "",
		category: "web",
		techStack: ["TypeScrip", "React", "Next.js","MySQL"],
		status: "in-progress",
		sourceCode: "", // 更改为GitHub链接
		visitUrl: "", // 添加前往项目链接
		startDate: "2025-10-01",
		featured: false,
		tags: ["论坛", "服务器","社交网站"],
	},
	{
		id: "siroukin-player",
		title: "Siroukin播放器",
		description:
			"由Siroukin Team制作的基于Python3.13的本地播放器。用户可在应用设置内编辑主题，应用可支持扫盘搜歌，自动匹配歌词。",
		image: "",
		category: "desktop",
		techStack: ["Python","JavaScript"],
		status: "in-progress",
		sourceCode: "https://github.com/YS-110509/Siroukin-Player", // 更改为GitHub链接
		visitUrl: "https://github.com/YS-110509/Siroukin-Player/archive/refs/heads/main.zip", // 添加前往项目链接
		startDate: "2025-07-09",
		featured: false,
		tags: ["播放器", "Pygame","自定义主题"],
	},
	{
		id: "mobile-roka",
		title: "Roka's room移动端",
		description:
			"由Siroukin Team制作的服务于Android平台的Roka's room应用，在移动端中拥有资源库、小游戏等更多内容",
		image: "",
		category: "mobile",
		techStack: ["Astro","TypeScript","Node.js","React"],
		status: "planned",
		sourceCode: "", // 更改为GitHub链接
		visitUrl: "", // 添加前往项目链接
		startDate: "2026-02-04",
		featured: true,
		tags: ["资源库", "小游戏","频道"],
	},
	{
		id: "simple-space-plane",
		title: "极简风太空战机",
		description:
			"Roka在学校里上信息课时无聊花30分钟写出来的纯代码极简风太空战机小游戏，左右键移动空格键发射，然后就没了。",
		image: "",
		category: "desktop",
		techStack: ["Python"],
		status: "completed",
		sourceCode: "https://github.com/YS-110509/simple-space-plane", // 更改为GitHub链接
		visitUrl: "https://github.com/YS-110509/simple-space-plane/archive/refs/heads/main.zip", // 添加前往项目链接
		startDate: "2024-04-15",
		featured: false,
		tags: ["小游戏"],
	},
	{
		id: "pygame-zip",
		title: "Pygame合集",
		description:
			"一个整合了众多Pygame作品的综合Python应用，以tkinter为导航连接至各Pygame应用。",
		image: "",
		category: "desktop",
		techStack: ["Python"],
		status: "planned",
		sourceCode: "", // 更改为GitHub链接
		visitUrl: "", // 添加前往项目链接
		startDate: "2025-06-10",
		featured: false,
		tags: ["小游戏","合集应用","招募中"],
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
