<template>
	<div role="tablist" class="tabs tabs-box tabs-sm scrollbar-hide flex h-10 flex-nowrap items-center gap-2 overflow-x-auto bg-transparent p-3">
		<template v-for="item in list" :key="item.path">
			<router-link
				:to="item.path"
				class="tab shrink-0 rounded-lg text-sm"
				:class="{ 'tab-active h-auto bg-sky-100/75 py-1 text-sky-800 shadow-sm': item.name === router.currentRoute.value.name }"
				>{{ item.name }}
			</router-link>
		</template>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const list = ref([]);

onMounted(() => {
	const allRoutes = router.getRoutes();
	const filteredRoutes = allRoutes.filter((route) => {
		return route.name !== "收藏" && route.name !== "设置" && route.name !== "个人资料" && route.name !== "登录" && route.name !== "注册";
	});

	list.value = filteredRoutes.map((route) => {
		return {
			name: route.name,
			path: route.path,
		};
	});
});
</script>
