import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'; //自动引入常用依赖
// 配置vant按需引入
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

import path from 'path'
const resolve = (dir)=>{
  return path.resolve(__dirname,dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    AutoImport({imports:['vue','vue-router'],dts:'./auto-imports.d.ts'})
  ],
  resolve:{
    alias:{
      '@':resolve('src'),
      '@c':resolve('src/components'),
      '@pc':resolve('src/views/pc'),
      '@m':resolve('src/views/mobile')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@use "./src/assets/style/scss/bem.scss" as *;`
      }
    }
  }
})
