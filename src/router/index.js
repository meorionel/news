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
			path: "/NewsFeed",
			name: "新闻资料",
			component: () => import("@/views/NewsFeed.vue"),
		},
		{
			path: "/Disease",
			name: "疾病预防",
			component: () => import("@/views/Disease.vue"),
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
		},
		{
			path: "/profile",
			name: "个人资料",
			component: () => import("@/views/profile.vue"),
		},
		{
			path: "/auth/login",
			name: "登录",
			component: () => import("@/views/auth/login.vue"),
		},
		{
			path: "/auth/register",
			name: "注册",
			component: () => import("@/views/auth/register.vue"),
		},
	],
});

router.beforeEach((to, from, next) => {
	console.log(to.name);
	if (to.name === "个人资料" && !window.localStorage.getItem("token")) {
		return next({ name: "登录" });
	}
	next();
});

export default router;
