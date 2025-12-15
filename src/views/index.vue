<template>
	<ul class="flex flex-col gap-4">
		<template v-if="forYouStore.list.length > 0">
			<template v-for="(item, index) in forYouStore.list" :key="item.title">
				<li class="flex w-full flex-col gap-2 py-4">
					<h2 class="text-2xl text-sky-800">{{ item.title }}</h2>
					<ul class="list flex flex-col gap-4">
						<template v-for="(items, indexs) in item.data">
							<li class="list-row flex w-full flex-col gap-2 px-0" v-if="indexs === 0">
								<div class="h-42 w-full overflow-hidden rounded-lg" v-if="index !== 2">
									<img :src="items.cover" :alt="item.cover" class="h-full w-full object-cover" />
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
							<li class="list-row flex w-full items-center gap-2 px-0" v-else>
								<div class="flex w-2/3 flex-col gap-2" :class="{ 'w-full': index === 2 }">
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
								<div class="h-24 w-1/3 overflow-hidden rounded-lg" v-if="index !== 2">
									<img :src="items.cover" :alt="item.cover" class="h-full w-full object-cover" />
								</div>
							</li>
						</template>
					</ul>
				</li>
				<li class="h-2 w-full bg-gray-200"></li>
			</template>
		</template>
		<template v-else>
			<div class="skeleton m-4 mb-0 h-8 w-26"></div>
			<li class="flex w-full flex-col gap-2 p-4">
				<div class="skeleton h-42 w-full"></div>
				<div class="skeleton h-4 w-28"></div>
				<div class="skeleton h-4 w-full"></div>
				<div class="skeleton h-4 w-full"></div>
				<div class="skeleton h-4 w-12"></div>
			</li>
			<li class="flex w-full items-center gap-2 p-4">
				<div class="flex w-2/3 flex-col gap-2">
					<div class="skeleton h-4 w-28"></div>
					<div class="skeleton h-4 w-full"></div>
					<div class="skeleton h-4 w-full"></div>
					<div class="skeleton h-4 w-12"></div>
				</div>
				<div class="skeleton h-24 w-1/3 overflow-hidden rounded-lg"></div>
			</li>
			<li class="flex w-full items-center gap-2 p-4">
				<div class="flex w-2/3 flex-col gap-2">
					<div class="skeleton h-4 w-28"></div>
					<div class="skeleton h-4 w-full"></div>
					<div class="skeleton h-4 w-full"></div>
					<div class="skeleton h-4 w-12"></div>
				</div>
				<div class="skeleton h-24 w-1/3 overflow-hidden rounded-lg"></div>
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
