<template>
	<div id="container"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { useWeatherStore } from "@/stores/weaterDate.js";
const weatherStore = useWeatherStore();

let map = null;
let geocoder = null;

const initAMap = () => {
	window._AMapSecurityConfig = {
		securityJsCode: "ae221541f9ed39889ad0a26614929efd",
	};

	AMapLoader.load({
		key: "7df923be5bf9c9b765e8314240caed03",
		version: "1.4.15",
		plugins: ["AMap.Autocomplete", "AMap.PlaceSearch", "AMap.Scale", "AMap.OverView", "AMap.ToolBar", "AMap.MapType", "AMap.PolyEditor", "AMap.CircleEditor", "AMap.Geocoder"],
	})
		.then((AMap) => {
			map = new AMap.Map("container", {
				viewMode: "2D",
				resizeEnable: true,
				center: [114.31667, 30.51667],
			});

			geocoder = new AMap.Geocoder({
				radius: 1000,
				extensions: "all",
			});

			map.on("click", (e) => {
				const { lng, lat } = e.lnglat;

				geocoder.getAddress([lng, lat], (status, result) => {
					if (status === "complete" && result.info === "OK") {
						const addressComponent = result.regeocode.addressComponent;
						const city = addressComponent.city || addressComponent.province;
						weatherStore.search = city;
						weatherStore.handleSearch(city);
					} else {
						console.error("逆地理编码失败:", result);
					}
				});
			});
		})
		.catch((e) => {
			console.log(e);
		});
};

onMounted(() => {
	initAMap();
});

onUnmounted(() => {
	if (map) {
		map.destroy();
	}
});
</script>

<style scoped>
#container {
	width: 100%;
	height: 400px;
	border-radius: 10px;
}
</style>
