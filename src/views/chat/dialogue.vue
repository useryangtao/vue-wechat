<template>
    <!--对话框-->
    <div class="_full_router component-chat-dialogue">
        <div class="_full_inner">
            <top-handle
                :back-path='backPath'
                :back-text='"微信(99+)"'
                :cur-text='topModel.curText'
                :next-path='topModel.nextPath'
                :next-icon='topModel.nextIcon'>
                <p class="_effect"
                slot='center'
                :class="animatiion_out?'_effect--50':''">
                    <span class="top-title__text _ellipsis" v-text='topModel.curText'></span>
                    <span class="top-title__num" v-text="'(320)'"></span>
                    <span class="iconfont icon-mute" v-show='topModel.isMute'></span>
                </p>
            </top-handle>
            <div class="_cover-content _effect" :class='animatiion_out?"_effect--30":""'>
                <section class="dialogue-section">
                    <div class="dialogue-section-inner">
                        <div class="dialogue-item dialogue-item--others">
                            
                        </div>
                        <div class="dialogue-item dialogue-item--time">
                            
                        </div>
                        <div class="dialogue-item dialogue-item--self">
                            
                        </div>
                    </div>
                </section>
                <footer class="dialogue-footer">
                    <component :is='dialogue_bar'></component>
                </footer>
            </div>
            </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>

import { dialogue_id,dialogue_type,dialogue_bar } from 'getters'
import { destroy_path } from 'actions'
import dialogueBar from 'components/dialogue-bar.vue'
import dialogueBarPerson from 'components/dialogue-bar-person.vue'
import topHandle from 'topHandle'
export default {
    vuex:{
        getters:{
            dialogue_id,
            dialogue_type,
            dialogue_bar
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
.component-chat-dialogue {
}

.dialogue-section {
    height: calc(100% - 50px);
}
.dialogue-section-inner{
    width: 100%;
    height: 100%;
    padding: 0 10px;
    overflow: auto;
}

.dialogue-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
}
</style>
