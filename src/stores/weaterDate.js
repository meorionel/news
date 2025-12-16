import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", () => {
	const search = ref("来宾市");
	const weatherData = ref([]);

	let handleSearch = (search) => {
		if (!search) return;
		axios
			.get("https://apis.tianapi.com/tianqi/index", {
				params: {
					key: "49c188c14c102574274b7e1e0c67af7b",
					city: search,
					type: 7,
				},
			})
			.then((res) => {
				weatherData.value = res.data;
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return { search, weatherData, handleSearch };
});
