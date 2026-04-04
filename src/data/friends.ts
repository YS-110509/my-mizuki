// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "星之彼岸系社",
		imgurl: "https://society.gimovo.com/favicon.ico",
		desc: "欢迎了解星之彼岸系社团，我们简称为星彼社。",
		siteurl: "https://society.gimovo.com/",
		tags: ["社团", "线下活动", "ACGN"],
	},
	{
		id: 2,
		title: "星网",
		imgurl: "https://gimovo.com/favicon.ico",
		desc: "由GIMOVO STUDIO制作并管理的大型综合性论坛。",
		siteurl: "https://gimovo.com/",
		tags: ["论坛", "音乐讨论", "游戏讨论", "美术讨论"],
	},
	{
		id: 3,
		title: "大上海城ACGN交流群",
		imgurl: "https://dshcacg.fun/images/logo.jpg",
		desc: "郑州大上海城二次元交流群的初代官网，目前该版本已停止更新。",
		siteurl: "https://dshcacg.fun/",
		tags: ["ACGN", "线下活动", "社区"],
	},
	{
		id: 4,
		title: "哔哩轻小说",
		imgurl: "https://www.linovelib.com/favicon.ico",
		desc: "一款页面简介、资源完整的轻小说文库阅读站。",
		siteurl: "https://www.linovelib.com/",
		tags: ["轻小说", "文库"],
	},
	{
		id: 5,
		title: "有希日记",
		imgurl: "https://www.mysqil.com/favicon.ico",
		desc: "以日轻资源整理为主的资源型论坛。",
		siteurl: "https://www.mysqil.com/",
		tags: ["轻小说", "游戏开发", "虚拟现实", "论坛"],
	},
	{
		id: 6,
		title: "NNNullptr南",
		imgurl: "https://www.xnmoe.com/assets/images/pfp.png",
		desc: "数学生的古早拼贴风格网站",
		siteurl: "https://xnmoe.com",
		tags: ["博客", "网站开发"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
