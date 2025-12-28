<template>
	<div class="navba border-base-300 flex min-h-0 items-center justify-between gap-2 border-b px-4 py-3">
		<div class="flex items-center gap-1 text-xl text-gray-600">
			<Icon icon="logos:google" />
			<span>News</span>
		</div>
		<div class="flex items-center gap-5">
			<User />
		</div>
	</div>
</template>

<script lang="ts" setup>
import User from "./User.vue";
</script>
