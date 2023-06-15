import { RouteRecordRaw } from "vue-router";
const baseRoutes:RouteRecordRaw[]=[{
    path:'/',
    component:()=> import('@m/home/index.vue')
}]
export default baseRoutes