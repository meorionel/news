<template>
	<div class="flex flex-col gap-4 px-4">
		<div class="flex flex-col gap-2">
			<Icon icon="devicon:google" class="text-4xl" />
			<span class="text-2xl font-bold text-gray-800">注册</span>
			<span class="text-sm text-gray-600">创建您的账号</span>
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
			<label class="input validator w-full">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
						<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</g>
				</svg>
				<input type="text" placeholder="Name (optional)" v-model="user.name" />
			</label>
			<label class="input validator w-full">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
						<rect x="3" y="4" width="18" height="16" rx="2"></rect>
						<path d="M7 8h10M7 12h4"></path>
					</g>
				</svg>
				<input type="email" placeholder="Email (optional, must be valid)" v-model="user.email" />
			</label>
			<label class="input validator w-full">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
						<path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						></path>
					</g>
				</svg>
				<input type="tel" required placeholder="Phone" v-model="user.phone" />
			</label>
			<div class="flex items-center justify-between">
				<router-link to="/auth/login" class="link link-info">已有账号? 去登录</router-link>
				<button class="btn btn-info rounded-full text-white" type="submit">注册</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";

const userStore = useUserStore();

const user = ref({
	username: "",
	password: "",
	name: "",
	email: "",
	phone: "",
});

const handleSubmit = async () => {
	const success = await userStore.register(user.value.username, user.value.password, user.value.name || undefined, user.value.email || undefined, user.value.phone);
	if (success) {
		router.push("/auth/login");
	}
};
</script>
