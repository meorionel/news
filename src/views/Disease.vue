<template>
	<div>
		<div style="margin: 0 auto">
			<div v-if="loading" style="text-align: center; color: #666">正在加载...</div>
			<div v-else-if="error" style="color: red; text-align: center">
				{{ error }}
			</div>
			<div v-else-if="advice.length > 0" style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); margin-top: 20px">
				<div v-for="(item, index) in advice" :key="index">
					<h2 @click="searchDetail(item.title)" style="cursor: pointer; color: #1976d2; text-decoration: underline">
						{{ item.title }}
					</h2>
					<p>{{ item.content }}</p>
					<a :href="'https://www.baidu.com/s?wd=' + encodeURIComponent(item.title + '怎么预防')" target="_blank" style="color: #1976d2; text-decoration: none">
						👉 查看更多详情
					</a>
					<hr v-if="index < advice.length - 1" style="margin: 20px 0; border-color: #eee" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			API_KEY: "7769aee82412a8ffc41fd5c54814627a",
			topics: ["预防内容"],
			loading: false,
			error: null,
			advice: [],
		};
	},
	methods: {
		searchDetail(title) {
			const searchQuery = title + "怎么预防";
			const encodedQuery = encodeURIComponent(searchQuery);
			window.open(`https://www.baidu.com/s?wd=${encodedQuery}`, "_blank");
		},

		async getAdvice(keyword) {
			this.loading = true;
			this.error = null;
			this.advice = [];

			const searchKeyword = keyword === "降血压" ? "高血压" : keyword;

			try {
				const res = await axios.get("https://apis.tianapi.com/healthskill/index", {
					params: {
						key: this.API_KEY,
						keyword: searchKeyword,
					},
				});

				if (res.data.code === 200) {
					const rawData = res.data.result.list.map((element) => ({
						title: element.title,
						content: element.content,
					}));

					console.log("原始数据条数:", rawData.length);
					console.log("原始数据:", rawData);

					// 去重处理 - 你可以选择使用简单去重或智能合并
					// 方法1：简单去重（推荐，如果内容相似）
					const uniqueData = this.removeDuplicates(rawData);

					// 方法2：智能合并（如果相同标题下有不同内容）
					// const uniqueData = this.mergeDuplicates(rawData);

					console.log("去重后条数:", uniqueData.length);
					console.log("去重后数据:", uniqueData);

					// 如果有重复被移除，显示提示
					if (uniqueData.length < rawData.length) {
						console.log(`移除了 ${rawData.length - uniqueData.length} 条重复数据`);
					}

					// 使用去重后的数据
					this.advice = uniqueData;

					// 如果去重后没有数据，显示提示
					if (this.advice.length === 0) {
						this.error = "未找到相关健康建议";
					}
				} else {
					this.error = "未找到相关健康建议";
				}
			} catch (err) {
				this.error = "请求失败，请检查网络或 API Key";
				console.log(err);
			} finally {
				this.loading = false;
			}
		},
		removeDuplicates(items) {
			const seen = new Set();
			const result = [];

			for (const item of items) {
				if (!seen.has(item.title)) {
					seen.add(item.title);
					result.push(item);
				}
			}

			return result;
		},
	},
	mounted() {
		this.getAdvice("预防内容");
	},
};
</script>
