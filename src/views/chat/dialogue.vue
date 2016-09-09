<template>
    <!--对话框-->
    <div class="_full_router router-dialogue">
        <div class="_full_inner">
            <top-handle
                :back-path='backPath'
                :back-text='"微信"'
                :cur-text='topModel.curText'
                :next-path='topModel.nextPath'
                :next-icon='topModel.nextIcon'>
                <p class="_effect"
                slot='center'
                :class="animatiion_out?'_effect--50':''">
                    <span v-text='topModel.curText'></span>
                    <span class=" iconfont icon-mute" v-show='topModel.isMute'></span>
                </p>
            </top-handle>
            <div class="_cover-content _effect" :class='animatiion_out?"_effect--30":""'>
                <section class="dialogue-section">
                    <div style="width:200px;height:200px;background-color:#ffffff;"></div>
                </section>
                <footer class="dialogue-footer _line-fine">
                    <component :is='dialogue_bar'></component>
                </footer>
            </div>
            </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>

import { destroy_path } from '../../vuex/action.js'
import dialogueBar from '../../components/dialogue-bar.vue'
import dialogueBarPerson from '../../components/dialogue-bar-person.vue'
import topHandle from 'topHandle'
export default {
    vuex:{
        getters:{
            dialogue_id:state=>state.dialogue_id,
            dialogue_type:state=>state.dialogue_type,
            dialogue_bar:state=>state.dialogue_bar,
            backPath:state=>state.back_path,
            is_back:state=>state.is_back
        },
        actions:{

        }
    },
    route: {
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
            isActive:false,
            backPath: {
                path: '/chat'
            },
            animatiion_out: false,
            topModel: {
                curText: "小明",
                isMute: true,
                nextPath: {
                    path: 'chat-detail',
                    append: true
                },
                nextIcon: "icon-chat-person"
            }
        }
    },
    create(){
        this.topModel.nextIcon = 'icon-chat-'+this.dialogue_type
    },
    methods: {},
    events:{
        'route-pipe'(_out){
            console.log('dialogue pipe-chat')
            this.animatiion_out = _out
        }

    },
    components: {
        topHandle,
        dialogueBar,
        dialogueBarPerson
    },
    created() {
    },
}
</script>
<style scoped>
.router-dialogue {
    z-index: 10;
}

.dialogue-section {
    height: calc(100% - 50px);
}

.dialogue-footer {
    width: 100%;
    background-color: #f4f4f6;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
}
</style>
