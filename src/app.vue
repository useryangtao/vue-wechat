<template>
    <header class="app-header">
        <div class="_effect"
            :class="animatiion_out?'_effect--50':''">
            <index-header></index-header>
        </div>
    </header>
    <section class="app-content">
        <!-- index router -->
        <router-view keep-alive></router-view>
    </section>
    <footer class="app-footer _line-fine">
        <div class="_effect "
            :class="animatiion_out?'_effect--50':''">
            <index-nav></index-nav>
        </div>
    </footer>
</template>
<script>
import store from './vuex/store'
import indexHeader from './components/index-header.vue'
import indexNav from './components/index-nav.vue'

require('./assets/css/reset.css')
require('./assets/css/weui.min.css')
require('./assets/css/iconfont.css')
require('./assets/css/common.scss')
require('./assets/css/base.scss')

export default {
    replace: false,
    store,
    data() {
        return {
            animatiion_out: false
        }
    },
    events:{
        'route-pipe'(_out){
            this.animatiion_out = _out
        }
    },
    components: {
        indexHeader,indexNav
    }
}
</script>
<style>

</style>
