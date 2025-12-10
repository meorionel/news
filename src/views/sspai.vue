<template>
	<div class="py-4">
		<template v-if="!sspaiStore.isError">
			<form class="filter px-4">
				<label for="clear">
					<input id="clear" class="hidden" type="reset" @click="sspaiStore.getList()" />
					<div class="btn btn-xs rounded-full btn-square mr-1">
						<Icon icon="gravity-ui:xmark" class="text-sm text-gray-600" />
					</div>
				</label>
				<template v-for="item in type" :key="item">
					<input class="btn btn-xs rounded-full my-0.5" type="radio" name="frameworks" :aria-label="item" @click="sspaiStore.getTypeList(item)" />
				</template>
			</form>
			<ul class="list">
				<template v-if="sspaiStore.list.length > 0">
					<template v-for="item in sspaiStore.list" :key="item.id">
						<li class="list-row w-full flex flex-col gap-2">
							<div class="w-full h-46 rounded-lg overflow-hidden">
								<img :src="`https://cdnfile.sspai.com/${item.cover}`" :alt="item.cover" class="w-full h-full object-cover" />
							</div>
							<p class="text-xs text-gray-600">{{ item.author }}</p>
							<p class="text-sm font-bold text-gray-800">{{ item.title }}</p>
							<div class="flex items-center justify-between">
								<p class="text-xs text-gray-600">{{ formatTime(item.timestamp) }}</p>
								<a :href="item.url" target="_blank" class="btn btn-xs rounded-full pr-3 pl-2.5 text-gray-600">
									<Icon icon="gravity-ui:book" class="text-xs text-sky-600" />
									阅读
								</a>
							</div>
						</li>
					</template>
				</template>
				<template v-else>
					<li class="list-row w-full flex flex-col gap-2">
						<div class="skeleton h-46 w-full"></div>
						<div class="skeleton h-4 w-28"></div>
						<div class="skeleton h-4 w-full"></div>
						<div class="skeleton h-4 w-full"></div>
						<div class="skeleton h-4 w-12"></div>
					</li>
					<li class="list-row w-full flex flex-col gap-2">
						<div class="skeleton h-46 w-full"></div>
						<div class="skeleton h-4 w-28"></div>
						<div class="skeleton h-4 w-full"></div>
						<div class="skeleton h-4 w-full"></div>
						<div class="skeleton h-4 w-12"></div>
					</li>
				</template>
			</ul>
		</template>
		<template v-else>
			<li class="pt-12">
				<div class="text-center text-gray-600 flex flex-col items-center justify-center gap-4">
					<div class="text-7xl">🤯</div>
					<p>数据获取失败</p>
				</div>
			</li>
		</template>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSspaiStore } from "@/stores/sspai";
import { formatTime } from "@/utils/formatTime";
const sspaiStore = useSspaiStore();

const type = ref(["应用推荐", "生活方式", "少数派播客"]);

onMounted(() => {
	sspaiStore.getList();
});
</script>
