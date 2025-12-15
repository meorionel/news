import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/tailwind.css";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import { Search } from "vant";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Search);
app.use(ElementPlus)
app.component("Icon", Icon);
app.mount("#app");
