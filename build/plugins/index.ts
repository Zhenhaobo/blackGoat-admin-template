import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import html from './html'


export  function setupPlugins (viteEnv:ImportMetaEnv){
  const plugins = [vue(),html(viteEnv),WindiCSS()]
  return plugins
}
