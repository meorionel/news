<template>
	<div>
		<label class="input mt-2 ml-6">
			<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
					<circle cx="11" cy="11" r="8"></circle>
					<path d="m21 21-4.3-4.3"></path>
				</g>
			</svg>
			<input v-model="search" type="search" required placeholder="Search" />
			<button @click="handlesearch()">搜索</button>
		</label>

		<div v-if="weatherData.result && weatherData.result.list">
			<div class="card bg-base-100 card-xs mt-4 ml-6 w-96 shadow-sm" v-for="wd in weatherData.result.list" :key="wd.date">
				<div class="card-body">
					<h2 class="card-title">{{ wd.date }}</h2>
					<h3 class="card-title">{{ weatherData.result.province }}&nbsp;&nbsp;&nbsp;&nbsp;{{ wd.week }}&nbsp;&nbsp;&nbsp;&nbsp;{{ wd.weather }}</h3>
					<h2>平均气温:{{ wd.real }}&nbsp;&nbsp;&nbsp;&nbsp;最低气温:{{ wd.lowest }}&nbsp;&nbsp;&nbsp;&nbsp;最高气温:{{ wd.highest }}</h2>
					<h4>{{ wd.tips }}</h4>
					<div class="card-actions justify-end"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

let search = ref("");

let handlesearch = () => {
	if (!search.value) return;
	axios
		.get("https://apis.tianapi.com/tianqi/index", {
			params: {
				key: "49c188c14c102574274b7e1e0c67af7b",
				city: search.value,
				type: 7,
			},
		})
		.then((res) => {
			console.log(res);
			weatherData.value = res.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

onMounted(() => {
	search.value = "来宾市";
	handlesearch();
});

const weatherData = ref([]);
const weatherData1 = ref({
	code: 200,
	msg: "success",
	result: {
		list: [
			{
				date: "2025-12-10",
				week: "星期三",
				weather: "多云",
				weatherimg: "duoyun.png",
				weathercode: "duoyun",
				real: "5℃",
				lowest: "-3℃",
				highest: "7℃",
				wind: "北风",
				windspeed: "3",
				windsc: "1-3级",
				sunrise: "07:26",
				sunset: "16:50",
				moonrise: "22:35",
				moondown: "11:49",
				pcpn: "0.0",
				uv_index: "1",
				vis: "25",
				humidity: "54",
				tips: "天气寒冷，请注意防寒保暖。建议着装：棉衣、羽绒服、冬大衣、皮夹克加羊毛衫、厚呢外套、呢帽、手套等；年老体弱者尽量少外出。",
			},
			{
				date: "2025-12-11",
				week: "星期四",
				weather: "多云",
				weatherimg: "duoyun.png",
				weathercode: "duoyun",
				real: "1℃",
				lowest: "-5℃",
				highest: "3℃",
				wind: "东南风",
				windspeed: "3",
				windsc: "1-3级",
				sunrise: "07:26",
				sunset: "16:50",
				moonrise: "23:42",
				moondown: "12:13",
				pcpn: "0.0",
				uv_index: "2",
				vis: "22",
				humidity: "42",
				tips: "天气寒冷，请注意防寒保暖。建议着装：棉衣、羽绒服、冬大衣、皮夹克加羊毛衫、厚呢外套、呢帽、手套等；年老体弱者尽量少外出。",
			},
			{
				date: "2025-12-12",
				week: "星期五",
				weather: "小雪",
				weatherimg: "xiaoxue.png",
				weathercode: "xiaoxue",
				real: "-4℃",
				lowest: "-6℃",
				highest: "-2℃",
				wind: "东北风",
				windspeed: "3",
				windsc: "1-3级",
				sunrise: "07:27",
				sunset: "16:50",
				moonrise: "",
				moondown: "12:35",
				pcpn: "0.5",
				uv_index: "1",
				vis: "16",
				humidity: "95",
				tips: "雨雪天气外出请注意防滑和行车安全。天气寒冷，请注意防寒保暖。建议着装：棉衣、羽绒服、冬大衣、皮夹克加羊毛衫、厚呢外套、呢帽、手套等；年老体弱者尽量少外出。",
			},
			{
				date: "2025-12-13",
				week: "星期六",
				weather: "阴转晴",
				weatherimg: "qing.png",
				weathercode: "yin_qing",
				real: "-2℃",
				lowest: "-10℃",
				highest: "0℃",
				wind: "西北风",
				windspeed: "3",
				windsc: "1-3级",
				sunrise: "07:28",
				sunset: "16:51",
				moonrise: "00:47",
				moondown: "12:55",
				pcpn: "0.0",
				uv_index: "2",
				vis: "24",
				humidity: "71",
				tips: "冬季晴天需注意保湿，外出避免长时间紫外线照射。天气寒冷，请注意防寒保暖。建议着装：棉衣、羽绒服、冬大衣、皮夹克加羊毛衫、厚呢外套、呢帽、手套等；年老体弱者尽量少外出。",
			},
			{
				date: "2025-12-14",
				week: "星期日",
				weather: "晴转多云",
				weatherimg: "duoyun.png",
				weathercode: "qing_duoyun",
				real: "-4℃",
				lowest: "-8℃",
				highest: "-2℃",
				wind: "西南风",
				windspeed: "3",
				windsc: "1-3级",
				sunrise: "07:29",
				sunset: "16:51",
				moonrise: "01:49",
				moondown: "13:15",
				pcpn: "0.0",
				uv_index: "2",
				vis: "25",
				humidity: "77",
				tips: "天气寒冷，请注意防寒保暖。建议着装：棉衣、羽绒服、冬大衣、皮夹克加羊毛衫、厚呢外套、呢帽、手套等；年老体弱者尽量少外出。",
			},
			{
				date: "2025-12-15",
				week: "星期一",
				weather: "多云转晴",
				weatherimg: "qing.png",
				weathercode: "duoyun_qing",
				real: "-2℃",
				lowest: "-7℃",
				highest: "0℃",
				wind: "北风",
				windspeed: "3",
				windsc: "1-3级",
				sunrise: "07:29",
				sunset: "16:51",
				moonrise: "02:51",
				moondown: "13:37",
				pcpn: "0.0",
				uv_index: "2",
				vis: "25",
				humidity: "73",
				tips: "冬季晴天需注意保湿，外出避免长时间紫外线照射。天气寒冷，请注意防寒保暖。建议着装：棉衣、羽绒服、冬大衣、皮夹克加羊毛衫、厚呢外套、呢帽、手套等；年老体弱者尽量少外出。",
			},
			{
				date: "2025-12-16",
				week: "星期二",
				weather: "晴",
				weatherimg: "qing.png",
				weathercode: "qing",
				real: "1℃",
				lowest: "-7℃",
				highest: "3℃",
				wind: "东北风",
				windspeed: "3",
				windsc: "1-3级",
				sunrise: "07:30",
				sunset: "16:51",
				moonrise: "03:53",
				moondown: "14:02",
				pcpn: "0.0",
				uv_index: "2",
				vis: "25",
				humidity: "64",
				tips: "冬季晴天需注意保湿，外出避免长时间紫外线照射。天气寒冷，请注意防寒保暖。建议着装：棉衣、羽绒服、冬大衣、皮夹克加羊毛衫、厚呢外套、呢帽、手套等；年老体弱者尽量少外出。",
			},
		],
		province: "北京",
		area: "北京",
		areaid: "101010100",
	},
});
</script>
