import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "For you",
			component: () => import("@/views/index.vue"),
		},
		{
			path: "/sspai",
			name: "少数派",
			component: () => import("@/views/sspai.vue"),
		},
		{
			path: "/wearteDate",
			name: "wearteDate",
			component: () => import("@/views/wearteDate.vue"),
		},
	],
});

export default router;
