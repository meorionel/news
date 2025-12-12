<template>
	<ul class="flex flex-col gap-4">
		<template v-if="forYouStore.list.length > 0">
			<template v-for="(item, index) in forYouStore.list" :key="item.title">
				<li class="w-full flex flex-col gap-2 p-4">
					<h2 class="text-2xl text-sky-800">{{ item.title }}</h2>
					<ul class="list flex flex-col gap-4">
						<template v-for="(items, indexs) in item.data">
							<li class="list-row px-0 w-full flex flex-col gap-2" v-if="indexs === 0">
								<div class="w-full h-42 rounded-lg overflow-hidden" v-if="index !== 2">
									<img :src="items.cover" :alt="item.cover" class="w-full h-full object-cover" />
								</div>
								<p class="text-xs text-gray-600">{{ items.author }}</p>
								<p class="text-sm font-bold text-gray-800">{{ items.title }}</p>
								<div class="flex items-center justify-between">
									<p class="text-xs text-gray-600">{{ formatTime(items.timestamp) }}</p>
									<a :href="item.url" target="_blank" class="btn btn-xs rounded-full pr-3 pl-2.5 text-gray-600">
										<Icon icon="gravity-ui:book" class="text-xs text-sky-600" />
										阅读
									</a>
								</div>
							</li>
							<li class="list-row px-0 w-full flex items-center gap-2" v-else>
								<div class="w-2/3 flex flex-col gap-2" :class="{ 'w-full': index === 2 }">
									<p class="text-xs text-gray-600">{{ items.author }}</p>
									<p class="text-sm font-bold text-gray-800">{{ items.title }}</p>
									<div class="flex items-center justify-between">
										<p class="text-xs text-gray-600">{{ formatTime(items.timestamp) }}</p>
										<a :href="item.url" target="_blank" class="btn btn-xs rounded-full pr-3 pl-2.5 text-gray-600">
											<Icon icon="gravity-ui:book" class="text-xs text-sky-600" />
											阅读
										</a>
									</div>
								</div>
								<div class="w-1/3 h-24 rounded-lg overflow-hidden" v-if="index !== 2">
									<img :src="items.cover" :alt="item.cover" class="w-full h-full object-cover" />
								</div>
							</li>
						</template>
					</ul>
				</li>
				<li class="bg-gray-200 h-2 w-full"></li>
			</template>
		</template>
		<template v-else>
			<div class="skeleton h-8 w-26 m-4 mb-0"></div>
			<li class="p-4 w-full flex flex-col gap-2">
				<div class="skeleton h-42 w-full"></div>
				<div class="skeleton h-4 w-28"></div>
				<div class="skeleton h-4 w-full"></div>
				<div class="skeleton h-4 w-full"></div>
				<div class="skeleton h-4 w-12"></div>
			</li>
			<li class="p-4 w-full flex items-center gap-2">
				<div class="w-2/3 flex flex-col gap-2">
					<div class="skeleton h-4 w-28"></div>
					<div class="skeleton h-4 w-full"></div>
					<div class="skeleton h-4 w-full"></div>
					<div class="skeleton h-4 w-12"></div>
				</div>
				<div class="w-1/3 h-24 rounded-lg overflow-hidden skeleton"></div>
			</li>
			<li class="p-4 w-full flex items-center gap-2">
				<div class="w-2/3 flex flex-col gap-2">
					<div class="skeleton h-4 w-28"></div>
					<div class="skeleton h-4 w-full"></div>
					<div class="skeleton h-4 w-full"></div>
					<div class="skeleton h-4 w-12"></div>
				</div>
				<div class="w-1/3 h-24 rounded-lg overflow-hidden skeleton"></div>
			</li>
		</template>
	</ul>
</template>

<script setup>
import { onMounted } from "vue";
import { formatTime } from "@/utils/formatTime";
import { useForYouStore } from "@/stores/forYou";
const forYouStore = useForYouStore();

onMounted(() => {
	forYouStore.getList();
});
</script>
