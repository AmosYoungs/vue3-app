import { RouteRecordRaw } from "vue-router";
const baseRoutes:RouteRecordRaw[]=[{
    path:'/',
    component:()=> import('@pc/home/index.vue')
}]
export default baseRoutes