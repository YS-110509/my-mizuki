// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Phones: [
		{
			name: "HUAWEI Mate 20 Pro(UD)",
			image: "https://r.huaweistatic.com/s/price_mgr/lst/image/M2T1A641N976805001387794609.png",
			specs: "8GB+256GB (LYA-AL10)",
			description:
				"HUAWEI Mate 20 Pro (UD) 是华为于2018年推出的旗舰智能手机，标准版Mate 20 Pro的屏下指纹升级型号。",
			link: "https://consumer.huawei.com/cn/support/phones/mate20-pro/",
		},
		{
			name: "HUAWEI Mate 9",
			image: "https://r.huaweistatic.com/s/price_mgr/lst/image/M2T1A641N976780659724009766.png",
			specs: "6GB+128GB (MHA-AL00)",
			description:
				"HUAWEI Mate 9是华为公司于2016年11月发布的旗舰智能手机，以其卓越的性能和徕卡联合设计的摄像头系统著称。",
			link: "https://consumer.huawei.com/cn/support/phones/mate9/",
		},
	],
	Pads: [
		{
			name: "iPad 5",
			image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111960_ipad_5th_generation.png",
			specs: "A1822 A9 32GB",
			description:
				"iPad 5 A1822是苹果公司于2017年3月发布的第五代iPad的Wi-Fi版本型号。",
			link: "https://support.apple.com/zh-cn/111960",
		},
	],
	Computers: [
		{
			name: "HP Pav Gaming Laptop 16-a0085TX (2F9F8PA)",
			image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07633136.png",
			specs: "i7-10750H NVIDIA®GTX1650Ti 16GB+512GB",
			description:
				"这是一款惠普中端游戏笔记本电脑，主打游戏性能与日常使用平衡。",
			link: "https://support.hp.com/cn-zh/product/details/hp-pavilion-gaming-16-a0000-laptop-pc-series/model/38352797?sku=2F9F8PA",
		},
	],
	Camera: [
		{
			name: "Nikon 1 J1",
			image: "https://downloadcenter.nikonimglib.com/image/view/5465861f-49dc-4669-94cd-5d8f0a804e06.jpg",
			specs: "1NIKKON10-30 1NIKKOR30-110 HB-N103",
			description:
				"尼康1 J1是尼康公司于2011年推出的首款可换镜头单电数码相机，隶属于尼康1系列微单产品线。",
			link: "https://downloadcenter.nikonimglib.com/zh-cn/products/121/Nikon_1_J1.html",
		},
	],
	Printer: [
		{
			name: "HP DeskJet Ink Advantage Ultra 4925",
			image: "https://hp.widen.net/content/mffxj8y2xg/jpeg/mffxj8y2xg.jpg?w=170&h=190&dpi=72",
			specs: "HP PCL 3 GUI",
			description:
				"HP DeskJet Ink Advantage Ultra 4925 是一款面向家庭用户的A4彩色喷墨多功能一体机。",
			link: "https://support.hp.com/cn-zh/product/details/hp-deskjet-ink-advantage-ultra-4900-series/model/2101376974",
		},
	],
};
