import { createApp, markRaw, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

const app = createApp(App);
const pinia = createPinia();

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("user", JSON.stringify(state.user));
  },
  { deep: true }
);

app.use(createPinia());

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(router);
app.use(pinia);

app.mount("#app");
