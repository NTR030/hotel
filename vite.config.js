import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        //所以直接进行手动定位
        additionalData: `@import "src/styles/main.scss";`,
      },
    },
  },
});
