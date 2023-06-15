import type { App } from "vue";

export function initAppConfig(){
    let userAgent = window.navigator.userAgent;
    // let screenW = document.documentElement.clientWidth|| document.body.clientWidth;
    window.onresize = function(){
        if(userAgent!==window.navigator.userAgent){
            location.href = window.location.origin
        }
    }
}