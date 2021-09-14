import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { currency } from "./currency";

const app = createApp(App)

app.config.globalProperties.$filters = { currency}

app.use(store).mount("#app");
