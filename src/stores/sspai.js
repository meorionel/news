import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useSspaiStore = defineStore("sspai", () => {
	const list = ref([]);
    const isError = ref(false);

	const clearList = () => {
		list.value = [];
	};
	const getList = async () => {
		await axios
			.get("https://hotapi.s22y.moe/sspai")
			.then((res) => {
				list.value = res.data.data;
			})
			.catch((err) => {
				console.error("获取列表失败：", err);
                isError.value = true;
			});
	};
	const getTypeList = async (type) => {
		clearList();
		await axios
			.get("https://hotapi.s22y.moe/sspai?type=" + type)
			.then((res) => {
				list.value = res.data.data;
			})
			.catch((err) => {
				console.error("获取类型列表失败：", err);
                isError.value = true;
			});
	};

	return { list, clearList, getList, getTypeList, isError };
});
