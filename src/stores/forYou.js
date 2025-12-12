import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useForYouStore = defineStore("forYou", () => {
	const list = ref([]);

	const getList = async () => {
		const netease_news = axios.get("https://hotapi.s22y.moe/netease-news?limit=5");
		const qq_news = axios.get("https://hotapi.s22y.moe/qq-news?limit=5");
		const sina_news = axios.get("https://hotapi.s22y.moe/sina-news?limit=5");
		const toutiao = axios.get("https://hotapi.s22y.moe/toutiao?limit=5");
		const acfun = axios.get("https://hotapi.s22y.moe/acfun?limit=5");

		const requests = [netease_news, qq_news, sina_news, toutiao, acfun];
		const results = await Promise.allSettled(requests);

		results.forEach((result, index) => {
			if (!result.value) {
				return console.error(`${index + 1} 请求失败.`);
			}
			list.value.push({
				title: result.value.data.title,
				code: result.value.data.code,
				data: result.value.data.data,
			});
		});
	};

	return { list, getList };
});
