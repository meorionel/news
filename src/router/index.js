import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "为您推荐",
			component: () => import("@/views/index.vue"),
		},
		{
			path: "/sspai",
			name: "少数派",
			component: () => import("@/views/sspai.vue"),
		},
		{
			path: "/weaterDate",
			name: "查询天气",
			component: () => import("@/views/weaterDate.vue"),
		},
		{
			path: "/collect",
			name: "收藏",
			component: () => import("@/views/collect.vue"),
		},
		{
			path: "/setting",
			name: "设置",
			component: () => import("@/views/setting.vue"),
		}
	],
});

export default router;
