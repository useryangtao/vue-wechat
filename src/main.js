import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import VueTouch from 'vue-touch'
import VueAnimatedList from 'vue-animated-list'
import zepto from 'webpack-zepto'
import fastclick from 'fastclick'

import store from 'store'
import routerMap from './route-config.js'
import filters from './filters'


Vue.config.devtools = true;

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueTouch)
Vue.use(VueAnimatedList)

const router = new VueRouter({
    history: true,
    abstract: false,
    saveScrollPosition: true
})

routerMap(router)

sync(store, router)

filters(Vue)

fastclick.attach(document.body)

const App = Vue.extend(require('./app.vue'))

router.start(App, 'body')


window.router = router
window.Vue = Vue
window.$ = zepto