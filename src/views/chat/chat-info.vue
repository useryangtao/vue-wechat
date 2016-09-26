<template>
    <div class="_full_router component-chat-info">
        <div class="_full_inner">
            <top-handle
                :back-text='"返回"'
                :decline="decline"
                :next-path="topModel.nextPath"
                :next-icon="topModel.nextIcon"
                >
                <div slot="center">
                    <p>
                        <span v-text="topModel.curText"></span>
                        <span class="parentheses" v-text="chat_member.length"></span>
                    </p>
                </div>
            </top-handle>
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}">
                <div class="_full _scroll">
                    <ul class="chat-dialogue-entry-collect">
                        <li v-for="item in chat_member"
                        v-touch:tap="go_Info(item.id)">
                            <div class="pic" :style="{backgroundImage:'url('+item.iconSrc+')'}">
                            </div>
                            <p class="username _ellipsis" v-text="item.name"></p>
                        </li>
                        <li>
                            <div class="pic">
                                <div>
                                    <span class="iconfont icon-chat-detail-add"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="weui_cells weui_cells_access weui_cells_only margin-top-0" >
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>全部群成员(<span v-text="chat_member.length"></span>)</p>
                            </div>
                            <div class="weui_cell_ft">
                            </div>
                        </a>
                    </div>
                    <div class="weui_cells weui_cells_access">
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>群聊名称</p>
                            </div>
                            <div class="weui_cell_ft">
                                <span class="_align-middle" v-text="chat_base.name"></span>
                            </div>
                        </a>
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>群二维码</p>
                            </div>
                            <div class="weui_cell_ft">
                            <img class="_align-middle" style="height:24px;" src="../../assets/images/chat-info-qr.png">
                            </div>
                        </a>
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>群公告</p>
                                <p class="_ellipsis-3" style="color:#888888;padding-right:10px;max-height:96px;">迎接新的一天到来的不是别的迎接新的一天到来的不是别的迎接新的一天到来的不是别的迎接新的一天到来的不是别的,而是看!邮!件!</p>
                            </div>
                            <div class="weui_cell_ft"></div>
                        </a>
                    </div>
                    <!--flag-->
                    <div class="weui_cells weui_cells_form">
                        <div class="weui_cell weui_cell_switch">
                            <div class="weui_cell_hd weui_cell_primary">消息免打扰</div>
                            <div class="weui_cell_ft">
                                <input class="weui_switch" type="checkbox">
                            </div>
                        </div>
                        <div class="weui_cell weui_cell_switch">
                            <div class="weui_cell_hd weui_cell_primary">置顶聊天</div>
                            <div class="weui_cell_ft">
                                <input class="weui_switch" type="checkbox">
                            </div>
                        </div>
                        <div class="weui_cell weui_cell_switch">
                            <div class="weui_cell_hd weui_cell_primary">保存到通讯录</div>
                            <div class="weui_cell_ft">
                                <input class="weui_switch" type="checkbox" checked>
                            </div>
                        </div>
                    </div>
                    <!-- flag -->
                    <div class="weui_cells weui_cells_access">
                        <div class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>我在本群的昵称</p>
                            </div>
                            <div class="weui_cell_ft"><span class="_align-middle">杨涛—前端</span></div>
                        </div>
                        <div class="weui_cell weui_cell_switch">
                            <div class="weui_cell_hd weui_cell_primary">显示群成员昵称</div>
                            <div class="">
                                <input class="weui_switch _align-middle" type="checkbox" checked>
                            </div>
                        </div>
                    </div>
                    <!-- flag -->
                    <div class="weui_cells weui_cells_access">
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>聊天文件</p>
                            </div>
                            <div class="weui_cell_ft">
                            </div>
                        </a>
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>查找聊天内容</p>
                            </div>
                            <div class="weui_cell_ft">
                            </div>
                        </a>
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>设置当前聊天背景</p>
                            </div>
                            <div class="weui_cell_ft">
                            </div>
                        </a>
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>投诉</p>
                            </div>
                            <div class="weui_cell_ft">
                            </div>
                        </a>
                    </div>
                    <!-- flag -->
                    <div class="weui_cells weui_cells_access">
                        <div class="weui_cell">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>清空聊天记录</p>
                            </div>
                            <div class="weui_cell_ft"></div>
                        </div>
                    </div>
                    <div style="margin-top:15px;padding: 0 20px">
                        <a href="javascript:;" class="weui_btn weui_btn_warn">删除并退出</a>
                    </div>
                    <br>
                </div>
            </div>
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
import { chat_base,chat_member } from 'getters'
// import {  } from 'actions'
import topHandle from 'topHandle'


export default {
    vuex:{
        getters:{
            chat_base,
            chat_member
        },
        actions:{}
    },
    route:{
        activate({from,to,next}) {
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
                backText:'',
                curText:'聊天信息',
                nextPath:{path:''},
                nextIcon:''
            }
        }
    },
    events:{
        'route-pipe'(_decline){
            this.decline = _decline
        }
    },
    methods:{
        go_Info(){
            this.$router.go({path:'person-info',append:true})
        }
    },
    components:{
        topHandle
    }
}
</script>
<style scoped>
.component-chat-info{
    z-index: 11;
}
</style>
