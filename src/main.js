import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
// import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import zepto from 'webpack-zepto'
import fastclick from 'fastclick'

import store from 'store'
import routerMap from './route-config.js'
import filters from './filters'

// const configPath = '/src/mock/'

// window.configPath = configPath;
// Vue.config.devtools = true;

Vue.use(Vuex)
Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.use(VueTouch)

const router = new VueRouter({
    history: true,
    abstract:false,
    saveScrollPosition: true
})

routerMap(router)

sync(store, router)

// Vue.http.options.headers = {
//     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// }
filters(Vue)

fastclick.attach(document.body)

const App = Vue.extend(require('./app.vue'))

router.start(App, '#app')


window.router = router
window.Vue = Vue
window.$ = zepto

