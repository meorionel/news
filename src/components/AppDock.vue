<template>
	<div class="dock">
		<router-link to="/" class="dock-item" :class="{ 'dock-active': excludeRoute(router.currentRoute.value.path) }">
			<Icon icon="gravity-ui:house" class="text-xl" />
			<span class="dock-label">主页</span>
		</router-link>
		<router-link to="/collect" class="dock-item" :class="{ 'dock-active': router.currentRoute.value.path === '/collect' }">
			<Icon icon="gravity-ui:tray" class="text-xl" />
			<span class="dock-label">收藏</span>
		</router-link>
		<router-link to="/setting" class="dock-item" :class="{ 'dock-active': router.currentRoute.value.path === '/setting' }">
			<Icon icon="gravity-ui:gear" class="text-xl" />
			<span class="dock-label">设置</span>
		</router-link>
	</div>
</template>

<script setup>
import { excludeRoute } from "@/utils/handleRouter";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
