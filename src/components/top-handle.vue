<template>
    <!--
左侧
props
    backText
中间
props
    curText
    decline
或者
slot
<p
slot='center'>
    <span class="top-title__text _ellipsis" v-text='topModel.curText'></span>
    <span class="top-title__num" v-text="'(320)'"></span>
    <span class="iconfont icon-mute" v-show='topModel.isMute'></span>
</p>

右侧
props
    nextPath
    nextIcon
或者
slot
    <div v-link="{path:'',append:true}">
        <span class="iconfont icon-chat-person"></span>
    </div>
-->
    <div class="_cover-top">
        <!-- left -->
        <div class="top-back">
            <div class="_ellipsis iconfont icon-return-arrow" v-link="backPath" v-text="backText">
            </div>
        </div>
        <!-- right -->
        <div class="top-other">
            <slot name="right">
                <div class="_align-right" v-link="nextPath">
                    <span class="iconfont" :class="nextIcon"></span>
                </div>
            </slot>
        </div>
        <!-- center -->
        <div class="top-title _effect" :class="{'_effect--50':decline}">
            <slot name="center">
                <p>
                    <span v-text='curText'></span>
                </p>
            </slot>
        </div>
    </div>
</template>
<script>
import {
    backPath
} from 'getters'
export default {
    props: {
        //返回路径
        // 'backPath': {
        //     type: Object
        // },
        //返回文本
        'backText': {
            type: String,
            default: '返回'
        },
        //衰退:cur是否变更为prev页
        'decline': {
            default: false
        },
        //当前文本
        'curText': {
            //type:String
        },
        //右侧按钮下一页
        'nextPath': {
            // type:Object
        },
        //右侧按钮class
        'nextIcon': {
            type: String
        }
    },
    vuex: {
        getters: {
            backPath
        }
    },
    data() {
        return {

        }
    },
    methods: {}
}
</script>
<style scoped>
</style>
