<template>
    <div class="_full_router component-add-friends">
        <div class="_full_inner">
            <top-handle
                :back-text="topModel.backText"
                :cur-text="topModel.curText"
                :decline="decline"
                >
            </top-handle>
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}">
                <div class="search-line">
                    <span class="iconfont icon-search"></span>
                    <input type="text" placeholder="微信号/手机号">
                </div>
                <p class="_align-center" style="padding-top:8px;">
                    <span>我的微信号:</span>
                    <span>yangtao_0215</span>
                    <b>&nbsp;<img src="../../assets/images/contact_add-friend-my-qr.png" style="width:24px;" class="_align-middle" alt=""></b>
                </p>
                <div class="weui_cells weui_cells_access add-friends-options">
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_hd"><img src="../../assets/images/contact_add-friend-reda.png"></div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>雷达加朋友</p>
                            <p>添加身边的朋友</p>
                        </div>
                        <div class="weui_cell_ft"></div>
                    </a>
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_hd"><img src="../../assets/images/contact_add-friend-addgroup.png"></div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>面对面建群</p>
                            <p>与身边的朋友进入同一个群聊</p>
                        </div>
                        <div class="weui_cell_ft"></div>
                    </a>
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_hd"><img src="../../assets/images/contact_add-friend-scanqr.png"></div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>扫一扫</p>
                            <p>扫描二维码名片</p>
                        </div>
                        <div class="weui_cell_ft"></div>
                    </a>
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_hd"><img src="../../assets/images/contact_add-friend-contacts.png"></div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>手机联系人</p>
                            <p>添加通讯录中的朋友</p>
                        </div>
                        <div class="weui_cell_ft"></div>
                    </a>
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_hd"><img src="../../assets/images/contact_add-friend-offical.png"></div>
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>公众号</p>
                            <p>获得更多资讯和服务</p>
                        </div>
                        <div class="weui_cell_ft"></div>
                    </a>
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
                curText:'添加朋友',
                nextPath:{path:''},
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
        topHandle
    },
}
</script>
<style scoped>
.search-line{
    position: relative;
    height: 50px;
    padding-left: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #ffffff;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    margin-top: 20px;
}
.search-line .icon-search{
    color: #40b938;
}
.search-line input{
    width: calc(100% - 30px);
    font-size: 16px;
    height: 100%;
    border: 0;
    outline: none;
    vertical-align: middle;
}
.add-friends-options img{
    width: 35px;
    display: block;
    margin-right: 10px;
}

.add-friends-options .weui_cell_primary p{
    font-size: 15px;
}
.add-friends-options .weui_cell_primary p:first-child{
    /* line-height: 1; */
}
.add-friends-options .weui_cell_primary p:last-child{
    font-size: 12px;
    color: #b7b7b7;
}
</style>
