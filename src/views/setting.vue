<template>
	<div>
		<label class="input mb-2 w-full rounded-lg">
			<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
					<circle cx="11" cy="11" r="8"></circle>
					<path d="m21 21-4.3-4.3"></path>
				</g>
			</svg>
			<input type="search" required placeholder="Search" />
		</label>
		<ul class="list px-0">
			<template v-for="item in list" :key="item.name">
				<li class="list-row text-md flex items-center justify-between px-0 text-gray-800">
					<div class="ml-4 flex items-center gap-3">
						<Icon :icon="`gravity-ui:${item.icon}`" />
						<span>{{ item.name }}</span>
					</div>
					<Icon icon="gravity-ui:chevron-right" class="mr-4 text-sm text-gray-600" />
				</li>
			</template>
			<li class="list-row text-md flex items-center gap-3 text-red-600">
				<Icon icon="gravity-ui:arrow-right-from-square" />
				<span>登出</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from "vue";

const list = ref([
	{
		name: "账户",
		icon: "person",
	},
	{
		name: "内容与社交",
		icon: "rocket",
	},
	{
		name: "数据与隐私",
		icon: "shield-keyhole",
	},
	{
		name: "家庭中心",
		icon: "persons",
	},
	{
		name: "连接",
		icon: "link",
	},
	{
		name: "通知",
		icon: "volume",
	},
	{
		name: "外观",
		icon: "t-shirt",
	},
]);
</script>
