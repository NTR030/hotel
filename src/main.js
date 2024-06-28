import { createApp } from "vue";

import "./styles/global.scss";
import App from "./App.vue";

//导入store状态库
import store from "./store/store";

//导入路由
import router from "./router/router";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
