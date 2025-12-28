import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

import router from "@/router";

const saveToken = (token) => {
	window.localStorage.setItem("token", token);
};

export const useUserStore = defineStore("user", () => {
	const user = ref({});

	const login = async (username, password) => {
		try {
			const res = await axios.post("http://127.0.0.1:8080/api/auth/login", {
				username,
				password,
			});
			if (!res.data.success) {
				console.log("登录失败");
				return;
			}
			saveToken(res.data.data.token);
			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};
	const register = async (username, password, name, email, phone) => {
		try {
			const res = await axios.post("http://127.0.0.1:8080/api/auth/register", {
				username,
				password,
				name,
				email,
				phone,
			});
			if (!res.data.success) {
				console.log("注册失败");
				return false;
			}
			return true;
			router.push("/auth/login");
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	return {
		user,
		login,
		register,
	};
});
