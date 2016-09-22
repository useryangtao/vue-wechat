<template>
    <div class="_full_router component-group-chat">
        <div class="_full_inner">
            <top-handle :back-text="topModel.backText" :cur-text="topModel.curText" :decline="decline" :next-path="topModel.nextPath" :next-icon="topModel.nextIcon">
            </top-handle>
            <div class="_cover-content _effect " :class="{'_effect--30':decline}">
                <div class="_full _scroll">
                    <div style="margin-top:-1px;">
                        <search-bar></search-bar>
                    </div>
                    <div class="weui_cells group-list">
                        <div class="weui_cell" v-for="item in 20">
                            <div class="weui_cell_hd"><img src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181803449-1753077357.jpg" alt=""></div>
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>web前端交流群<span>{{$index}} </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
// import {} from 'getters'
// import {} from 'actions'
import searchBar from 'components/search-bar.vue'

import topHandle from 'topHandle'

export default {
    vuex: {
        getters: {

        },
        actions: {

        }
    },
    route: {
        activate({
            from,
            to,
            next
        }) {
            //do something...
            this.$parent.$emit('route-pipe', true)
            next()
        },
        deactivate({
            from,
            to,
            next
        }) {
            this.$parent.$emit('route-pipe', false)
            next()
        }
    },
    data() {
        return {
            decline: false,
            topModel: {
                backText: '返回',
                curText: '群聊',
                nextPath: {
                    path: ''
                },
                nextIcon: ''
            }
        }
    },
    methods: {},
    events: {
        'route-pipe' (_decline) {
            this.decline = _decline
            this.$parent.$emit('route-pipe', _decline)
        }
    },
    created() {

    },
    ready() {

    },
    components: {
        topHandle,
        searchBar
    },
}
</script>
<style scoped>
.component-group-chat .group-list {
    margin-top: -1px;
}

.component-group-chat .group-list .weui_cell_hd img {
    width: 35px;
    border: 0;
    margin-right: 10px;
    display: block;
}

.component-group-chat .group-list .weui_cell_bd {
    font-size: 16px;
}
</style>
