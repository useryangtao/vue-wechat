<template>
    <ul class="component-dialogue-bar-public">

        <li v-for="item in dialogue_bar.menu">
            <a :href="item.link"></a>
            <span class="iconfont icon-chat-detail-add" v-show=""></span>
            <div class="_ellipsis" v-text="item.title">
            </div>
        </li>
    </ul>
</template>
<script>
import { dialogue_bar } from 'getters'
export default {
    vuex:{
        getters:{
            dialogue_bar
        }
    },
    replace: true,
    props: {},
    data() {
        return {}
    },
    methods: {},
    components: {}
}
</script>
