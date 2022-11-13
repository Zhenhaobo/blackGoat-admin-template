import { defineConfig , loadEnv} from "vite";

import WindiCSS from "vite-plugin-windicss";
import { getRootPath, getSrcPath ,setupPlugins} from "./build";
// https://vitejs.dev/config/
const rootPath = getRootPath();
const srcPath = getSrcPath();
export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv;
  return {
    plugins: setupPlugins(viteEnv),
    resolve: {
      alias: {
        "@": srcPath,
        "~": rootPath
      }
    },
    base: "./", // 设置打包路径
    server: {
      port: 4000, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
    }
  }
});
