<template>
<!--
左侧
props
    backPath
    backText

中间
props
    curText
    decline
或者
slot
<p class="_effect"
slot='center'
:class="animatiion_out?'_effect--50':''">
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
    <div class="top-back _left">
        <div class="_ellipsis iconfont icon-return-arrow"
            v-link="backPath"
            v-text="backText"></div>
    </div>
    <div class="top-other _right" style="">
        <slot name="right">
            <div class="_right" v-link="nextPath">
                <span class="iconfont" :class="nextIcon"></span>
            </div>
        </slot>
    </div>
    <div class="top-title">
        <slot name="center">
            <p class="_effect" :class="decline?'_effect--50':''">
                <span v-text='curText'></span>
            </p>
        </slot>
    </div>

</div>
</template>
<script>

export default {
    props:{
        //返回路径
        'backPath':{
            type:Object
        },
        //返回文本
        'backText':{
            type:String,
            default:'返回'
        },
        //衰退:cur是否变更为prev页
        'decline':{
            default:false
        },
        //当前文本
        'curText':{
            //type:String
        },
        //右侧按钮下一页
        'nextPath':{
            // type:Object
        },
        //右侧按钮class
        'nextIcon':{
            type:String
        }
    },
    vuex:{
        getters:{
        }
    },
    data () {
        return {

        }
    },
    methods:{
    }
}
</script>
<style scoped>
    
</style>
