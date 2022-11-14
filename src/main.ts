import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:windi.css";
import { setupRouter } from "./router";
import { setupStore } from "./store";
import { setupNaiveModule } from './components/common';

async function setupApp() {
  const app = createApp(App);

  // 注册路由
  await setupRouter(app);

  //注册全局常用组件
  setupNaiveModule(app);

  // 注册store
  setupStore(app)


  app.mount("#app");
}
setupApp();
