import { createRouter, createWebHashHistory } from 'vue-router'
import { mobileRoutes } from './mobile'
import pcRoutes from './pc'
import { isMobile } from '@/utils/commUtils'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: isMobile() ? mobileRoutes : pcRoutes
})


