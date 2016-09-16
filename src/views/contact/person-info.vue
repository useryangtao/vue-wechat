<template>
    <div class="_full_router component-person-info">
        <div class="_full_inner">
            <top-handle
                :back-text="topModel.backText"
                :cur-text="topModel.curText"
                :decline="decline"
                :next-path="topModel.nextPath"
                :next-icon="topModel.nextIcon"
                >
            </top-handle>
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}">
                <div class="_full _scroll">
                    <!-- flag -->
                    <div class="weui_cells">
                        <div class="weui_cell">
                            <div class="card_pic _left" :style="{backgroundImage:'url('+person_info.base.iconSrc+')'}">
                            </div>
                            <div class="card_line">
                                <div class="remark">
                                    <span v-text="person_info.base.remark"></span><span class="gender gender-man"></span>
                                </div>
                                <p class="wxid"><span>微信号:</span><span v-text="person_info.base.wxid"></span></p>
                                <p class="nickname">
                                    <span>昵称:</span>
                                    <span v-text="person_info.base.nickname"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- flag -->
                    <div class="weui_cells weui_cells_access">
                        <div class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>设置备注和标签</p>
                            </div>
                            <div class="weui_cell_ft">
                            </div>
                        </div>
                        <div class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <div>
                                    <span>电话号码</span>&nbsp;&nbsp;
                                    <a
                                    href="tel:18812345678"
                                    v-text="person_info.base.telphone" 
                                    :href="'tel:'+person_info.base.telphone"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- flag -->
                    <div class="weui_cells weui_cells_access weui_cells_apm">
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <span class="apm _left">地区</span>
                                <div class="apm_content"></div>
                            </div>
                        </a>
                        <a class="weui_cell weui_cells_photos" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <span class="apm _left">个人相册</span>
                                <div class="apm_content"></div>
                            </div>
                            <div class="weui_cell_ft"></div>
                        </a>
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <span class="apm _left">更多</span>
                                <div class="apm_content"></div>
                            </div>
                            <div class="weui_cell_ft"><span></span></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- router -->
        <router-view  transition="cover"></router-view>
    </div>
</template>
<script>
import {person_info} from 'getters'

import topHandle from 'topHandle'
export default {
    vuex:{
        getters:{
            person_info
        },
        action:{

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
                backText:'返回',
                curText:'详细资料',
                nextPath:{path:'person-info-set',append:true},
                nextIcon:'icon-more'
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
        console.log(this.person_info);
    },
    ready(){

    },
    components: {
        topHandle
    },
}
</script>
<style scoped>
.weui_cells_apm .apm{
    width: 85px;
}
.weui_cells_apm .apm_content{
    overflow: hidden;
}
.weui_cells_photos .apm{
    line-height: 60px;
}
.weui_cells_photos .apm_content{
    height: 60px;
}
</style>
