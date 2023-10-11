

<template>
  <div class="page">
    <div v-for="item in demoList" @click="toPath(item.path)">
        {{ item.name}}
    </div>
    <!-- <router-view v-slot="{Component}">
      <component :is="Component"></component>
  </router-view> -->
  </div>
</template>

<script setup lang="ts">
import { router } from '@/router';
const demoList = reactive([{
    name:'css雷达图',
    path:'/radar'
}])
const toPath = (path:string)=>{
 router.push({path})
}
</script>
<style scoped lang="scss">
</style>