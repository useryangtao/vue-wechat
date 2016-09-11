<template>
    <header class="app-header">
        <div class="_effect"
            :class="{'_effect--50':decline}">
            <index-header></index-header>
        </div>
    </header>
    <section class="app-content">
        <!-- index router -->
        <router-view keep-alive></router-view>
    </section>
    <footer class="app-footer _line-fine">
        <div class="_effect "
            :class="{'_effect--50':decline}"
            >
            <index-nav></index-nav>
        </div>
    </footer>
</template>
<script>
import store from 'store'
import indexHeader from 'components/index-header.vue'
import indexNav from 'components/index-nav.vue'

require('assets/css/reset.css')
require('assets/css/weui.min.css')
require('assets/css/iconfont.css')
require('assets/css/common.scss')
require('assets/css/dialogue-bar.scss')
require('assets/css/contact.scss')
require('assets/css/base.scss')

export default {
    replace: false,
    store,
    data() {
        return {
            decline: false
        }
    },
    events:{
        'route-pipe'(_decline){
            this.decline = _decline
        }
    },
    components: {
        indexHeader,indexNav
    }
}
</script>
<style>

</style>
