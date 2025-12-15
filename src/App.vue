<template>
	<div>
		<div class="bg-base-100 fixed z-10 w-full">
			<AppHeader />
			<template v-if="excludeRoute(router.currentRoute.value.path)">
				<TabList />
			</template>
		</div>
		<div class="pt-24">
			<router-view></router-view>
			<el-backtop :right="24" :bottom="100">
				<Icon icon="gravity-ui:arrow-up-to-line" class="text-sm text-sky-500" />
			</el-backtop>
		</div>
		<div class="fixed right-0 bottom-0 left-0">
			<AppDock />
		</div>
	</div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import TabList from "./components/TabList.vue";
import AppDock from "./components/AppDock.vue";
import { excludeRoute } from "@/utils/handleRouter";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
