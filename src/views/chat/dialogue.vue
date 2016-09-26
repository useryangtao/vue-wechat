<template>
    <!--对话框-->
    <div class="_full_router component-chat-dialogue">
        <div class="_full_inner">
            <top-handle :back-text='"微信"' :cur-text='topModel.curText' :next-path='topModel.nextPath' :next-icon='topModel.nextIcon'>
                <p class="_effect" slot='center' :class="{'_effect--50':decline}">
                    <span class="top-title__text _ellipsis" v-text='topModel.curText'></span>
                    <span class="top-title__num parentheses" v-text="chat_member.length" v-show="dialogue_type==='group'"></span>
                    <span class="iconfont icon-mute" v-show='topModel.isMute'></span>
                </p>
            </top-handle>
            <div class="_cover-content _effect" :class="{'_effect--30':decline}">
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
                    <component :is='dialogue_bar_type'></component>
                </footer>
            </div>
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
import {
    chat_base,
    dialogue_type,
    dialogue,
    dialogue_bar,
    chat_member,
    chat_config
} from 'getters'
import topHandle from 'topHandle'
import dialogueBar from 'components/dialogue-bar.vue'
import dialogueBarPerson from 'components/dialogue-bar-person.vue'
export default {
    vuex: {
        getters: {
            chat_base,
            dialogue_type,
            dialogue,
            dialogue_bar,
            chat_member,
            chat_config
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
            //icon
            this.topModel.nextIcon = 'icon-chat-' + this.dialogue_type
            this.topModel.curText = this.chat_base.name
            //bar
            this.dialogue_bar_type = this.dialogue_bar.menu.length > 0 ? 'dialogueBar' : 'dialogueBarPerson'

            this.topModel.isMute = this.chat_config.newsMute
            //nextPath
            let nextPath = '';
            let roleType = this.dialogue_type;
            if (roleType === 'group') {
                nextPath = '/chat/dialogue/chat-info'
            } else if (roleType === 'friends') {
                nextPath = '/chat/dialogue/chat-detail'
            } else if (roleType === 'service') {
                nextPath = ''
                // nextIcon = ''
            }
            this.topModel.nextPath = nextPath

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
            dialogue_bar_type: 'dialogueBarPerson', //dialogueBarPerson dialogueBar
            decline: false,
            topModel: {
                curText: "",
                isMute: true,
                nextPath: {
                    path: '/chat/dialogue/chat-detail'
                },
                nextIcon: "icon-chat-person"
            }
        }
    },
    create() {


    },
    methods: {},
    events: {
        'route-pipe' (_decline) {
            this.decline = _decline
        }

    },
    components: {
        topHandle,
        dialogueBar,
        dialogueBarPerson
    },
    created() {},
}
</script>
<style scoped>
.component-chat-dialogue {}

.dialogue-section {
    height: calc(100% - 50px);
}

.dialogue-section-inner {
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
