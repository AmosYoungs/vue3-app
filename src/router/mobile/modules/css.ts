
import { RouteRecordRaw } from "vue-router";
const cssRoutes:RouteRecordRaw[]=[{
    path:'/css',
    component:()=> import('@m/css/index.vue'),
   
},
{
    path:'/radar',
    component:()=> import('@m/css/demos/radar.vue')

}
]
export default cssRoutes
