import {RouteRecordRaw} from 'vue-router'
const modules = import.meta.glob('./modules/*.ts',{eager:true})
const routeModuleList:RouteRecordRaw[] = []
Object.keys(modules).forEach(key=>{
    const mod = modules[key].default;
    const modList = Array.isArray(mod)?[...mod]:[mod];
    routeModuleList.push(...modList)
})

 const pcRoutes = [...routeModuleList]

 export default pcRoutes