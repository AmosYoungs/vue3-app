<template>
  <div class="">
    <div>
    <div class="menu-item" v-for="item in menuList" @click="toPath(item.path)"> {{ item.name }}</div>
  </div>

  </div>
</template>

<script setup lang="ts">
import { router } from '@/router';



const menuList = reactive([
  {
    name: 'CSS',
    path: '/css'
  },
  {
    name: '组件库',
    path: ''
  },{
    name:'three.js'

  }
])

const toPath = (path:string)=>{
 router.push({path})
}


</script>
<style scoped lang='scss'>
.menu-item{
  padding: 20px;
  width: 22.4%;
  height: 25px;
  border-bottom: 1px solid #999;
  border-right: 1px solid #999;
  float: left;

}
</style>