<template>
	<div>
		<div class="avatar" @click="router.push('/login')" v-if="!token">
			<div class="flex w-8 items-center justify-center rounded-full bg-gray-400/25">
				<Icon icon="gravity-ui:person" class="text-gray-600" />
			</div>
		</div>
		<div class="avatar avatar-online" @click="router.push('/profile')" v-else>
			<div class="w-8 rounded-full">
				<img src="https://gravatar.s22y.moe/avatar/me" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const token = ref("");

onMounted(() => {
	token.value = window.localStorage.getItem("token");
});
</script>
