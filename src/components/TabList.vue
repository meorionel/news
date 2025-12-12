<template>
	<div role="tablist" class="tabs tabs-box tabs-sm bg-transparent flex items-center gap-2 w-full min-h-auto h-10 p-3 flex-nowrap overflow-x-auto scrollbar-hide">
		<div v-for="item in list" :key="item.path">
			<router-link
				:to="item.path"
				class="tab text-sm shrink-0 rounded-lg"
				:class="{ 'tab-active shadow-sm bg-sky-100/75 text-sky-800 py-1 h-auto': item.name === router.currentRoute.value.name }"
				>{{ item.name }}
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const list = ref([]);

onMounted(() => {
	const allRoutes = router.getRoutes();
	list.value = allRoutes.map((route) => {
		return {
			name: route.name,
			path: route.path,
		};
	});
});
</script>
