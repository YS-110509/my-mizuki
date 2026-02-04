// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "the-new-version-of-rokaink-based-on-Mizuki",
		title: "The New Version of roka.ink Based on Mizuki",
		description:
			"The new version of roka.ink, built upon Astro and Mizuki, has been established and is now operational.",
		type: "project",
		startDate: "2026-02-03",
		skills: ["TypeScript","Astro","Tailwind CSS","Svelte"],
		icon: "tabler:code",
	},
	{
		id: "participate-in-the-csp-j-and-csp-s",
		title: "Participate in the CSP-J and CSP-S",
		description:
			"I participated in both CSP-J and CSP-S. Without undergoing systematic learning of CSP-S knowledge, my score in CSP-S was only 1.5 points away from advancing to the next level.",
		type: "achievement",
		startDate: "2025-09-20",
		endDate: "2025-09-20",
		skills: ["C++"],
		icon: "material-symbols:trophy",
	},
	{
		id: "production-of-the-new-version-of-dshcacg",
		title: "Production of the New Version of DSHCACG",
		description:
			"The new version of Zhengzhou Great Shanghai City Anime Cultural Exchange Station, produced by the Siroukin team （supervised by Roka）",
		type: "project",
		startDate: "2025-11-29",
		skills: ["TypeScript","React","Next.js"],
		icon: "tabler:code",
	},
	{
		id: "personal-website-established",
		title: "Personal Website Established",
		description:
			"The prototype of this website (roka.ink) has been established and is now operational",
		type: "project",
		startDate: "2025-08-08",
		endDate: "2026-02-02",
		skills: ["JavaScript","HTML","CSS"],
		icon: "tabler:code",
	},
	{
		id: "build-a-display-screen-in-the-game",
		title: "Build a Display Screen in the Game",
		description:
			"In the original version of the game <Minecraft>, a scrolling display screen capable of writing, reading, deleting, and cycling display can be created using redstone circuits.",
		type: "project",
		startDate: "2024-07-01",
		endDate: "2024-07-01",
		skills: ["Minecraft"],
		icon: "tabler:code",
	},
	{
		id: "first-participate-in-the-csp-j",
		title: "First participate in the CSP-J",
		description:
			"I participated in CSP-J for the first time and reached the score threshold for the first prize, but I did not advance to the next round.",
		type: "achievement",
		startDate: "2024-09-21",
		endDate: "2024-09-21",
		skills: ["C++"],
		icon: "material-symbols:trophy",
	},
	{
		id: "join-the-sti-club-in-middle-school",
		title: "Join The STI Club In Middle School",
		description:
			"Joined the science and innovation club in middle school and served as the club president. Represented the school in multiple provincial and municipal information literacy competitions by practicing with the programming club.",
		type: "education",
		startDate: "2023-09-06",
		endDate: "2025-06-25",
		skills: ["Python"],
		icon: "material-symbols:school",
	},
	{
		id: "won-the-second-place-in-the-iro",
		title: "Won the Second Place in the IRO",
		description:
			"Won the second place in the 21st IRO International Robot Olympiad.",
		type: "achievement",
		startDate: "2019-07-29",
		endDate: "2019-07-29",
		skills: ["EV3"],
		icon: "material-symbols:trophy",
		featured: true,
	},
	{
		id: "joining-the-robotics-team-for-the-first-time",
		title: "Joining the Robotics Team for the First Time",
		description:
			"Joined the robotics team in primary school and prepared for the 21st International Robot Olympiad.",
		type: "education",
		startDate: "2019-07-01",
		endDate: "2019-07-27",
		skills: ["EV3"],
		icon: "material-symbols:school",
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
