<template>
	<div class="flex flex-col gap-4 px-4">
		<div class="flex flex-col gap-2">
			<Icon icon="devicon:google" class="text-4xl" />
			<span class="text-2xl font-bold text-gray-800">登陆</span>
			<span class="text-sm text-gray-600">请使用您的 Google 账号登录。该浏览器中的其他 Google 应用都将可以访问此账号。</span>
		</div>
		<form @submit.prevent="handleSubmit" class="flex w-full flex-col gap-4">
			<label class="input validator w-full">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
						<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</g>
				</svg>
				<input type="text" required placeholder="Username" v-model="user.username" />
			</label>
			<label class="input validator w-full">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
						<path
							d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
						></path>
						<circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
					</g>
				</svg>
				<input type="password" required placeholder="Password" v-model="user.password" />
			</label>
			<div class="tooltip" data-tip="不许忘记">
				<a class="link link-info">忘记了用户名或者密码?</a>
			</div>
			<div class="flex items-center justify-between">
				<router-link to="/auth/register" class="link link-info">创建账号</router-link>
				<button class="btn btn-info rounded-full text-white" type="submit">下一步</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

const user = ref({
	username: "1meorion122",
	password: "123456",
});

const handleSubmit = async () => {
	await userStore.login(user.value.username, user.value.password);
};
</script>
