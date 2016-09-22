<template>
    <div class="_full_router component-new-friends">
        <div class="_full_inner">
            <top-handle
                :back-text="topModel.backText"
                :cur-text="topModel.curText"
                :decline="decline"
                >
                <div slot="right" class="_align-right" v-link="topModel.nextPath">
                    <span>添加朋友</span>
                </div>
            </top-handle>
            <div class="_cover-content _effect _full _scroll"
                :class="{'_effect--30':decline}">
                <div style="margin-top:-1px">
                    <search-bar></search-bar>
                </div>
                <div class="weui_cells margin-top-0">
                    <div class="weui_cell ">
                        <dl class="add-tel-address">
                            <dt><span class="iconfont icon-iphone-address"></span></dt>
                            <dd>添加手机联系人</dd>
                        </dl>
                    </div>
                </div>
                <!-- flag -->
                <div class="weui_cells message-list">
                    <div class="weui_cell">
                        <div class="weui_cell_hd">
                            <img src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg" alt="" style="width:40px;margin-right:5px;display:block">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p><b>陌生人</b></p>
                            <p><span>我是群聊""的</span><span>陌生人</span></p>
                        </div>
                        <div class="weui_cell_ft">已添加</div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_hd"><img src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg" alt="" style="width:40px;margin-right:5px;display:block"></div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p><b>陌生人</b></p>
                            <p><span>我是群聊""的</span><span>陌生人</span></p>
                        </div>
                        <div class="weui_cell_ft">已拒绝</div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_hd"><img src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg" alt="" style="width:40px;margin-right:5px;display:block"></div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p><b>陌生人</b></p>
                            <p><span>我是群聊""的</span><span>陌生人</span></p>
                        </div>
                        <div class="weui_cell_ft">
                            <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary">接受</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- router -->
        <router-view  transition="cover"></router-view>
    </div>
</template>
<script>
// import {} from 'getters'
// import {} from 'actions'

import searchBar from 'components/search-bar.vue'
import topHandle from 'topHandle'

export default {
    vuex:{
        getters:{

        },
        actions:{

        }
    },
    route:{
        activate({from,to,next}) {
            console.log(from)
            this.$parent.$emit('route-pipe',true)
            next()
        },
        deactivate({from,to,next}){
            this.$parent.$emit('route-pipe',false)
            next()
        }
    },
    data() {
        return {
            decline:false,
            topModel:{
                backText:'通讯录',
                curText:'新的朋友',
                nextPath:{path:'add-friends',append:true},
                nextIcon:''
            }
        }
    },
    methods:{
    },
    events:{
        'route-pipe'(_decline){
            this.decline = _decline
        }
    },
    created(){

    },
    ready(){

    },
    components: {
        topHandle,
        searchBar
    },
}
</script>
<style scoped>
.add-tel-address{
    margin: 0 auto;
    text-align: center;
}
.add-tel-address dt .iconfont{
    font-size: 35px;
    color: #4bb94b;
}
.add-tel-address dd{
    font-size: 14px;
    color: #929292;
}
.message-list .weui_cell_primary p b{
    font-size: 18px;
    font-weight: normal;
}
.message-list .weui_cell_primary p span{
    font-size: 14px;
    color: #888888;
}
</style>
