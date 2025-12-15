<template>
	<div>
		<!-- 轮播图保持不变 -->
		<div class="Carousel" v-if="carouselList.length > 0">
			<div class="block text-center">
				<span class="demonstration"></span>
				<el-carousel height="220px">
					<el-carousel-item v-for="(item, index) in carouselList" :key="index">
						<a :href="item.link" target="_blank" class="carousel-link">
							<img :src="item.imgUrl" alt="轮播图片" class="carousel-img" />
						</a>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div v-else>
			<div class="skeleton h-[220px] w-full"></div>
		</div>

		<!-- 新闻列表 -->
		<div class="news-list-container">
			<div v-if="loading" class="loading">加载中...</div>
			<div v-else-if="error" class="error">加载失败，请稍后重试</div>
			<div v-else class="news-list">
				<div
					v-for="item in newsList"
					:key="item.id"
					class="news-item"
					@click="handleNewsItemClick(item)"
					@keydown.enter="handleNewsItemClick(item)"
					tabindex="0"
					role="button"
					aria-label="点击阅读新闻"
				>
					<div class="image-container">
						<img :src="item.picUrl" :alt="item.title" v-if="item.picUrl" class="news-image" @click.stop />
						<div v-else class="no-image">暂无图片</div>
					</div>
					<div class="text-container">
						<h3 class="news-title">{{ item.title }}</h3>
						<p class="news-description">{{ item.description }}</p>
						<div class="news-meta">
							<span class="news-source">{{ item.source }}</span>
							<span class="news-time">{{ formatTime(item.ctime) }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// 轮播图数据保持不变
const carouselList = ref([
	{
		imgUrl: "https://p9-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/search_multi_media/b4464668603f49d28c936123d7326869~tplv-a9rns2rl98-pc_smart_face_crop-v1:512:384.image?rcl=202512121644585625D93FE0C7F4D67960&rk3s=8e244e95&rrcfp=cee388b0&x-expires=2080889105&x-signature=aN45ETLMIx6%2BwHG1N0Jtgfy58WQ%3D",
		link: "https://www.example.com/page1",
	},
	{
		imgUrl: "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/search_multi_media/79eaee0b6b494e8e953d5e1cbe3b3fa5~tplv-a9rns2rl98-pc_smart_face_crop-v1:512:384.image?rcl=202512121644585625D93FE0C7F4D67960&rk3s=8e244e95&rrcfp=cee388b0&x-expires=2080889109&x-signature=O%2FyO7zOadbnDaJd9MtujLF3rHks%3D",
		link: "https://www.toutiao.com/article/7494961021593846312/?upstream_biz=doubao&source=m_redirect&wid=1765529288401",
	},
	{
		imgUrl: "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/search_multi_media/b5e5dcbb441748b48c4301b48441329a~tplv-a9rns2rl98-pc_smart_face_crop-v1:284:213.image?rcl=20251212165119C92950E143450A107678&rk3s=8e244e95&rrcfp=cee388b0&x-expires=2080889488&x-signature=OzflYYXpiscoOmmY2PfmN%2FD0he4%3D",
		link: "https://apnews.com/photo-gallery/photos-russia-ukraine-war-kyiv-attack-c0f9ebd3f9f5233ffaf95a50a0844775",
	},
	{
		imgUrl: "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/search_multi_media/e8adb52ba14b4d56b0b836a6892d7e25~tplv-a9rns2rl98-pc_smart_face_crop-v1:512:384.image?rcl=20251212165119C92950E143450A107678&rk3s=8e244e95&rrcfp=cee388b0&x-expires=2080889491&x-signature=hRoGpIOzHgSh55%2Fj%2BZoihgVDzZM%3D",
		link: "http://celebsweb.com/",
	},
]);

const newsList = ref([]);
const loading = ref(false);
const error = ref(false);

// 格式化时间函数
const formatTime = (timeStr) => {
	if (!timeStr) return "";
	// 将时间字符串转换为更友好的格式
	const date = new Date(timeStr);
	return isNaN(date.getTime()) ? timeStr : date.toLocaleDateString();
};

// 处理新闻项点击事件
const handleNewsItemClick = (item) => {
	// 检查是否有链接字段，如果有则跳转
	if (item.url || item.link || item.newsUrl) {
		window.open(item.url || item.link || item.newsUrl, "_blank");
	} else {
		// 如果没有链接，则可以显示详细信息或提示
		console.log("新闻详情:", item);
		alert(`标题: ${item.title}\n来源: ${item.source}\n时间: ${formatTime(item.ctime)}\n\n${item.description}`);
	}
};

// 获取新闻数据
const fetchNewsData = async () => {
	try {
		loading.value = true;
		error.value = false;

		const response = await axios.get("https://apis.tianapi.com/guonei/index", {
			params: {
				key: "26e60dedcb401abb5de77096339ce65e",
				num: 10,
			},
		});

		// 检查响应数据结构并正确提取新闻列表
		if (response.data && response.data.code === 200 && response.data.result && response.data.result.newslist) {
			// 打印原始数据结构以便调试
			console.log("API返回的原始数据:", response.data.result.newslist[0]);

			newsList.value = response.data.result.newslist.map((item, index) => ({
				id: item.id || index,
				ctime: item.ctime || "",
				title: item.title || "无标题",
				description: item.description || "暂无描述",
				source: item.source || "未知来源",
				picUrl: item.picUrl || item.pic || item.imgUrl || "", // 尝试多种可能的图片字段名
				url: item.url || item.link || item.newsUrl || null, // 添加可能的链接字段
			}));
			console.log("新闻数据加载成功:", newsList.value);
		} else {
			throw new Error("数据格式不正确");
		}
	} catch (err) {
		console.error("获取新闻失败:", err);
		error.value = true;
	} finally {
		loading.value = false;
	}
};

// 组件挂载时获取数据
onMounted(() => {
	fetchNewsData();
});
</script>

<style scoped>
.Carousel {
	padding: 5px 10px;
}

.demonstration {
	color: var(--el-text-color-secondary);
}

.carousel-link {
	display: block;
	width: 100%;
	height: 100%;
	text-decoration: none;
}

.carousel-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border: none;
}

.el-carousel__item h3 {
	display: none;
}

.el-carousel__item:nth-child(2n),
.el-carousel__item:nth-child(2n + 1) {
	background-color: transparent;
}

/* 新闻列表样式 */
.news-list-container {
	padding: 20px;
}

.loading,
.error {
	text-align: center;
	padding: 20px;
	font-size: 16px;
}

.news-item {
	display: flex;
	margin-bottom: 20px;
	padding: 15px;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition: box-shadow 0.3s ease;
	cursor: pointer; /* 添加指针光标表示可点击 */
}

.news-item:hover {
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	transform: translateY(-2px); /* 添加轻微上移效果 */
}

.image-container {
	flex: 0 0 120px;
	margin-right: 15px;
}

.news-image {
	width: 100%;
	height: 80px;
	object-fit: cover;
	border-radius: 4px;
}

.no-image {
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
	color: #999;
	border-radius: 4px;
	font-size: 14px;
}

.text-container {
	flex: 1;
}

.news-title {
	font-size: 16px;
	font-weight: bold;
	margin: 0 0 8px 0;
	line-height: 1.4;
	color: #333;
}

.news-description {
	font-size: 14px;
	color: #666;
	line-height: 1.5;
	margin: 0 0 10px 0;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.news-meta {
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	color: #999;
}

.news-source {
	flex: 1;
}

.news-time {
	white-space: nowrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
	.news-item {
		flex-direction: column;
	}

	.image-container {
		flex: 0 0 auto;
		margin-right: 0;
		margin-bottom: 10px;
	}

	.news-image,
	.no-image {
		height: 180px;
	}
}
</style>
