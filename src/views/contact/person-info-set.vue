<template>
    <div class="_full_router component-xxx">
        <div class="_full_inner">
            <top-handle
                :back-text="topModel.backText"
                :cur-text="'资料设置'"
                :decline="decline"
                >
            </top-handle>
            <!-- flag -->
            <div class="_cover-content _effect"
                :class="{'_effect--30':decline}">
                <div class="weui_cells weui_cells_access " >
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>设置备注及标签</p>
                        </div>
                        <div class="weui_cell_ft">
                        </div>
                    </a>
                </div>
                <!-- flag -->
                <div class="weui_cells weui_cells_access " >
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>发送他的名片</p>
                        </div>
                        <div class="weui_cell_ft">
                        </div>
                    </a>
                </div>
                <!-- flag -->
                <div class="weui_cells weui_cells_form">
                    <div class="weui_cell weui_cell_switch">
                        <div class="weui_cell_hd weui_cell_primary">设为星标朋友</div>
                        <div class="weui_cell_ft">
                            <input class="weui_switch" type="checkbox">
                        </div>
                    </div>
                </div>
                <!-- flag -->
                <div class="weui_cells weui_cells_form">
                    <div class="weui_cell weui_cell_switch">
                        <div class="weui_cell_hd weui_cell_primary">不让他(她)看我的朋友圈</div>
                        <div class="weui_cell_ft">
                            <input class="weui_switch" type="checkbox">
                        </div>
                    </div>
                    <div class="weui_cell weui_cell_switch">
                        <div class="weui_cell_hd weui_cell_primary">不看他(她)的朋友圈</div>
                        <div class="weui_cell_ft">
                            <input class="weui_switch" type="checkbox">
                        </div>
                    </div>
                </div>
                <!-- flag -->
                <div class="weui_cells weui_cells_access">
                    <div class="weui_cell weui_cell_switch">
                        <div class="weui_cell_hd weui_cell_primary">加入黑名单</div>
                        <div class="">
                            <input class="weui_switch" type="checkbox">
                        </div>
                    </div>
                    <div class="weui_cell">
                        <div class="weui_cell_hd weui_cell_primary">投诉</div>
                        <div class="weui_cell_ft">
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

import topHandle from 'topHandle'
export default {
    vuex:{
        getters:{

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
                backText:'',
                curText:'',
                nextPath:{poth:''},
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
    
</style>
