<template>
    <ul class="component-dialogue-bar-public">

        <li v-for="item in dialogue_bar.menu" v-touch:tap="linkFrame(item)">
            <a :href="item.link"></a>
            <span class="iconfont icon-chat-detail-add" v-show=""></span>
            <div class="_ellipsis" v-text="item.title">
            </div>
        </li>
    </ul>
</template>
<script>
import { dialogue_bar } from 'getters'
import {set_iframe_url} from 'actions'
export default {
    vuex:{
        getters:{
            dialogue_bar
        },
        actions:{
            set_iframe_url
        }
    },
    replace: true,
    props: {},
    data() {
        return {}
    },
    methods: {
        linkFrame(obj){
            if(!!obj.url){
                this.set_iframe_url(obj,()=>{
                    this.$router.go({path:'/chat/dialogue/link'})
                })
            }
        }
    },
    components: {}
}
</script>
