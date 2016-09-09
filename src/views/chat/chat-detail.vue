<template>
    <div class="_full_router component-chat-detail">
        <div class="_full_inner">
            <top-handle
                :back-path='backPath'
                :back-text='"返回"'
                :next-path="topModel.nextPath"
                >
                <div slot="center"
                class="_effect"
                :class="animatiion_out?'_effect--50':''">
                    <p>
                        <span v-text="topModel.curText"></span>
                        <span class="personNum">420</span>
                    </p>
                </div>
            </top-handle>
            <div class="_cover-content _effect"
                :class="animatiion_out?'_effect--30':''">
                <div v-link="{path:'chat-info',replace:true}">chat-info</div>
                <div class="chat-detail-content">
                    <ul class="chat-detail-entry-collect">
                        <li v-for="i in 8">
                            <div class="pic" style="background-image:url(http://ww1.sinaimg.cn/mw690/d0d07035jw1f7f2n6w1j1j20e60e6wg4.jpg)">
                            </div>
                            <p class="username _ellipsis">杨涛yangtao</p>
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
                                    <p>cell standard</p>
                                </div>
                                <div class="weui_cell_ft">
                                </div>
                            </a>
                        </div>
                    <br>
                    <div v-link="{path:'person-info',append:true}">详细资料</div>
                </div>
            </div>
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
import utils from 'utils'
import topHandle from 'topHandle'
export default {
    mixins:[utils],
    vuex:{
        getters:{
            backPath:state=>state.back_path,
            is_next_page:state=>state.is_next_page
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
            animatiion_out:false,
            curPath:'',
            topModel:{
                backText:'',
                curText:'',
                nextPath:{poth:''}
            }
        }
    },
    ready(){
        console.log(this.animatiion_out)
    },
    events:{
        'route-pipe'(_out){
            this.animatiion_out = _out
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
    .chat-detail-content{
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color:#efeff4;
    }
    .chat-detail-entry-collect{
        background-color: #ffffff;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        color: #464646;
        font-size: 14px;
    }
    .chat-detail-entry-collect li{
        float: left;
        flex-grow: 1;
        flex-basis: 25%;
        max-width: 25%;
        padding: 5px 10px;
        text-align: center;
    }
    .chat-detail-entry-collect li div.pic{
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        width: 55px;
        height: 55px;
        margin: 0 auto;
        background-size: cover;
    }
    .chat-detail-entry-collect li p.username{
        padding-top: 10px;
        padding-bottom: 5px;
    }
    .chat-detail-entry-collect li:last-child div.pic{
        border-radius: 0;
    }
    .chat-detail-entry-collect li:last-child div.pic div{
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 200%;
        border: 1px solid #bbb;
        border-radius: 12px;
        transform: scale(.5);
        transform-origin: 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .chat-detail-entry-collect li:last-child div.pic span.iconfont{
        font-size: 70px;
        color: #bbbbbb;
    }

    .personNum{
    }
    .personNum:before{
        content: "(";
    }
    .personNum:after{
        content:")";
    }
</style>
