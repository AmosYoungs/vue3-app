import { createApp } from 'vue'
import './assets/style/css/style.css'
import {router} from './router/index'
console.log(router)
import {store} from './store'

import {setupUtils} from './utils/index'
import {initAppConfig} from './utils/initAppConfig'
import App from './App.vue'

const app = createApp(App)
initAppConfig()
setupUtils(app)
app.use(store)
app.use(router)
app.mount('#app')
