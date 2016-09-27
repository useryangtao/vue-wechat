<template>
<div id="app">
    <header class="app-header" style="display:none;" v-show="appload">
        <div class="_effect" :class="{'_effect--50':decline}">
            <index-header style="overflow:visible;"></index-header>
        </div>
    </header>
    <section class="app-content" style="display:none;" v-show="appload">
        <!-- index router -->
        <router-view keep-alive></router-view>
    </section>
    <footer class="app-footer _line-fine" style="display:none;" v-show="appload">
        <div class="_effect " :class="{'_effect--50':decline}">
            <index-nav></index-nav>
        </div>
    </footer>   
    <!--mask layer--> 
    <section class="welcome" v-show="welcome" transition="welcome"></section>
    <section class="mobile-tips" style="dislay:none;" v-show="isnotMobile">
        <div class="mobile-tips-inner">
            <div class="mobile-model"> <img src="./assets/images/mobile.png" alt=""></div>
            <p><br>为保证最佳用户体验,<br></p>
            <p class="_align-left">1.请用chrome移动设备调试模式(F12)下打开</p>
            <p class="_align-left">2.手机浏览器访问</p>
            <br>
            <button class="weui_btn weui_btn_mini weui_btn_primary" v-touch:tap='isnotMobile = false'>关闭</button>
        </div>
    </section>
</div>
</template>
<script>
import store from 'store'
import indexHeader from 'components/index-header.vue'
import indexNav from 'components/index-nav.vue'

require('assets/css/common.scss')
require('assets/css/base.scss')

export default {
    replace: false,
    store,
    data() {
        return {
            appload: false,//主结构
            welcome: false,//欢迎页
            isnotMobile:false,//是否为移动设备访问
            decline: false //router animation
        }
    },
    created() {
        let isMobile = function(){
            let userAgentInfo = navigator.userAgent;
            let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod")
            let flag = false;
            for (let v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }
            };
            return flag;
        }();
        if(!isMobile){
            this.isnotMobile = true;
        }
        if (this.$route.matched.length === 1) {
            this.welcome = true;
        }
        this.appload = true;
        setTimeout(() => {
            this.welcome = false;
        }, 2000)
    },
    events: {
        'route-pipe' (_decline) {
            this.decline = _decline
        }
    },
    components: {
        indexHeader,
        indexNav
    }
}
</script>
<style scoped>
.welcome {
    width: 100%;
    height: 100%;
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    transition: .25s all linear;
    background: url(./assets/images/launchimage.png) no-repeat center center;
    background-size: cover;
}

.welcome-leave {
    opacity: 0;
}
.mobile-tips{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,.75);
    text-align: center;
    color: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mobile-tips-inner{
    width: 330px;
    padding-bottom: 200px;
}
.mobile-model{
    flex-grow: 1;
}
</style>
