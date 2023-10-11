import type { App } from "vue";
import commUtils from "./commUtils";
import { blockClass, elementClass, modifierClass } from '../hooks/scss/scssHandler'
export function setupUtils(app: App<Element>) {
    app.config.globalProperties.$commUtils = commUtils;
    app.config.globalProperties.$blockClass = blockClass;
    app.config.globalProperties.$elementClass = elementClass;
    app.config.globalProperties.$modifierClass = modifierClass;
}