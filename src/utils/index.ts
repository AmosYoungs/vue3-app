import type { App } from "vue";
import commUtils from "./commUtils";
export function setupUtils(app:App<Element>){
    app.config.globalProperties.$commUtils = commUtils
}