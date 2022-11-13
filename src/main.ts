import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:windi.css";
import { setupRouter } from "./router";
import { setupStore } from "./store";

async function setupApp() {
  const app = createApp(App);
  await setupRouter(app);
  setupStore(app)
  app.mount("#app");
}
setupApp();
