<template>
    <div class="_full_router component-chat-detail">
        <div class="_full_inner">
            <top-handle
                :back-text='"返回"'
                :decline="decline"
                :cur-text='topModel.curText'
                >
            </top-handle>
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}">
                <div class="_full _scroll">
                    <ul class="chat-dialogue-entry-collect ">
                        <li v-for="item in chat_member"
                        v-touch:tap="go_personInfo(item.id)">
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
                    <!-- flag -->
                    <div class="weui_cells weui_cells_form">
                        <div class="weui_cell weui_cell_switch">
                            <div class="weui_cell_hd weui_cell_primary">置顶聊天</div>
                            <div class="weui_cell_ft">
                                <input class="weui_switch" type="checkbox">
                            </div>
                        </div>
                        <div class="weui_cell weui_cell_switch">
                            <div class="weui_cell_hd weui_cell_primary">消息免打扰</div>
                            <div class="weui_cell_ft">
                                <input class="weui_switch" type="checkbox">
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
                    </div>
                    <!-- flag -->
                    <div class="weui_cells weui_cells_access">
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>设置当前聊天背景</p>
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
                    </div>
                    <!-- flag -->
                    <div class="weui_cells">
                        <div class="weui_cell">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>清空聊天记录</p>
                            </div>
                        </div>
                    </div>
                    <!-- flag -->
                    <div class="weui_cells weui_cells_access">
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>投诉</p>
                            </div>
                            <div class="weui_cell_ft">
                            </div>
                        </a>
                    </div>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
import topHandle from 'topHandle'
import {chat_member} from 'getters'
import {get_person_info} from 'actions'

export default {
    vuex:{
        getters:{
            chat_member
        },
        actions:{
            get_person_info
        }
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
                curText:'聊天详情',
                nextPath:{poth:''},
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
        go_personInfo(id){
            console.log(this.chat_member)
            this.get_person_info(id,()=>{
                this.$router.go({path:"person-info",append:true})
            })


        }
    },
    components:{
        topHandle
    }
}
</script>
<style scoped>
.component-chat-detail{
    z-index: 5;
}
</style>
