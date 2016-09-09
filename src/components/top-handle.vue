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
    <div>
        <p>
            <span>小明</span>
            <span class="personNum">420</span>
        </p>
        <span class="_right iconfont icon-mute"></span>
    </div>

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
    <div class="top-back _left" :title='backPath.path'>
        <div class="iconfont icon-return-arrow"
            v-link="backPath"
            v-text="backText">返回</div>
    </div>
    <div class="top-other _right">
        <slot name="right">
            <div v-link="nextPath">
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
    
    .top-back .iconfont{
        font-size: 16px;
        font-weight: normal;
    }
    .top-back .iconfont:before{
        font-size:20px;
        vertical-align: middle;
    }
    .top-title{
        position:absolute;
        z-index: 0;
        top: 0;
        left: 50%;
        text-align: center;
        font-size:18px;
        width: calc(100% - 100px);
    }
    .top-title > p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .top-title .icon-mute{
        font-size: 12px;
        color: #878689;
        vertical-align: bottom;
    }
    .top-other{
        height: 100%;
    }
    .top-other .iconfont{
        font-size: 20px;
    }
</style>
