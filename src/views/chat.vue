<template>
    <div class="_full_inner _scroll _effect component-chat"
        :class="{'_effect--30':decline}">
        <search-bar></search-bar>
        <ul class="wechat-list">
            <li class="item _line-fine" v-for="item in wechat_list" transition="chat-item">
                <div class="info"
                :class="{
                    'current':currentIndex==$index
                    }"
                @touchstart="info_touchstart($index)"
                @touchend="info_touchend"
                v-touch:tap="info_tap($index)"
                v-touch:swipeleft="info_swipeleft($index)"
                v-touch-options:swipe="{ direction: 'horizontal' }">

                    <div class="ico-box">
                        <i
                        :class="item.chatConfigModel | f_news 'nclass'"
                        v-text="item.chatBaseModel | f_news 'ntext'"
                        v-show="item.chatBaseModel | f_news 'nshow'"></i>
                        <div class="ico">
                            <img :src="item.base.iconSrc" alt="pic">
                        </div>
                    </div>
                    <div class="desc">
                        <div class="desc-time" v-text="item.chatBaseModel.endTimeStr | fmtDate 'hh:ss'"></div>
                        <div class="desc-title" v-text="item.base.name"></div>
                        <div class="desc-message">
                            <div class="desc-mute iconfont icon-mute"
                            :title="item.chatConfigModel.newsMute | json"
                            v-show="item.chatConfigModel.newsMute"></div>
                            <span
                            :title="item.base.type"
                            v-show="item.base.type!=='friends'"
                            v-text="item.chatBaseModel.endChatAuth+':'"></span>
                            <span v-text="item.chatBaseModel.endChatTxt"></span>
                        </div>
                    </div>
                </div>
                <div class="handle">
                    <div class="handle-unread"
                    v-touch:tap='increase_newsState($index,1)'
                    v-show="item.chatBaseModel.newsUnreadCount==0">标为未读</div>
                    <div class="handle-unread"
                    v-touch:tap='increase_newsState($index,0)'
                    v-show="item.chatBaseModel.newsUnreadCount>0">标为已读</div>
                    <div class="handle-del"
                    v-touch:tap="delete_item($index)">删除</div>
                </div>
            </li>
        </ul>
    </div>
    <!-- router -->
    <router-view transition="cover" keep-alive></router-view>
</template>
<script>
import utils from 'utils'
import { wechat_list } from 'getters'
import {
    get_menu_wechat_list,
    set_menu_active,
    set_chat,
    set_chat_count,
    set_news_state,
    delete_news
    } from '../vuex/actions'

import searchBar from 'components/search-bar.vue'

export default {
    vuex:{
        getters:{
            wechat_list
        },
        actions:{
            get_menu_wechat_list,
            set_menu_active,
            set_chat,
            set_chat_count,
            set_news_state,
            delete_news
        }
    },
    mixins:[utils],
    route:{
        activate({from,to,next}) {

            this.set_menu_active(0)
            this.get_menu_wechat_list(()=>{
                this.computed_unRead_count()
            })
            next()
        }
    },
    data() {
        return {
            decline: false,
            currentIndex:-1,//列表item处在左划状态
            isTouchSwipe:false,//验证是否处于左划状态
        }
    },
    events:{
        'route-pipe'(_decline){
            this.decline = _decline
            this.$parent.$emit('route-pipe',_decline)
        }
    },
    methods: {
        info_touchstart(_index){
            this.currentIndex = -1
        },
        info_touchend(){
        },
        info_tap(_index){
            var index = _index;
            // console.log("tap")
            if(index>=0 && !this.isTouchSwipe){
                this.set_chat(this.wechat_list[index])
                this.$router.go({path:"/chat/dialogue"})
            }
            this.isTouchSwipe = false
        },
        info_swipeleft(_index) {
            // console.log('swipeleft')
            event.stopPropagation()
            if(!this.isTouchSwipe){
                this.isTouchSwipe = true
                this.currentIndex = _index
            }else{
                this.isTouchSwipe = false
            }
        },
        computed_unRead_count(){
            //计算未读数量
            let sum = 0
            this.wechat_list.forEach(({chatBaseModel,chatConfigModel},index)=>{
                if(!chatConfigModel.newsMute){
                    let count = chatBaseModel.newsUnreadCount
                    sum += count
                }
            })
            this.set_chat_count(sum)
        },
        increase_newsState(index,val){
            //改变已读未读状态并回调计算未读总和
            this.set_news_state(index,val,()=>{
                this.currentIndex = -1
                this.computed_unRead_count()
            })
        },
        delete_item(index){
            this.delete_news(index,()=>{
                this.currentIndex = -1;
                this.computed_unRead_count()
            })

        }
    },
    filters:{
        f_news(obj,attr){
            var obj = obj || {}
            let newsClass = obj.newsMute?'_news-dot':'_news-count'
            let newsText = !obj.newsMute?obj.newsUnreadCount:''
            let newsShow = (obj.newsUnreadCount>0)
            let o = {
                nclass:newsClass,
                ntext:newsText,
                nshow:newsShow
            }
            return o[attr]
        }
    },
    components: {
        searchBar
    },
    created(){
    }
}

</script>
<style scoped>
/*wechat*/

.wechat-list {
    position: relative;
    overflow-x: hidden;
}

.wechat-list .info {
    transition: .2s all linear;
}

.wechat-list .item .info.current {
    transform: translate3d(-156px,0,0);
    -webkit-transform: translate3d(-156px,0,0);
}

.wechat-list .item .info:active {
    background-color: #d9d9d9;
}

.wechat-list .item {
    position: relative;
}

.wechat-list .item:last-child:after {
    content: "";
    position: absolute;
    width: 200%;
    left: 0;
    z-index: 2;
    left: 8px;
    bottom: 0;
    transform: scale(.5);
    transform-origin: 0 0;
    -webkit-transform: scale(.5);
    -webkit-transform-origin: 0 0;
    background-color: #b7b7b7;
    height: 1px;
}

.wechat-list .info {
    position: relative;
    z-index: 2;
    left: 0;
    width: 100%;
    padding: 8px;
    background-color: #ffffff;
    transition: .2s transform linear;
}

.wechat-list .info--stick {
    background-color: #f2f2f6;
}

.wechat-list .info .ico-box {
    position: relative;
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    /* background: #d6d5d3; */
}

.wechat-list .info .ico {
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
}

.wechat-list .info .ico img {
    width: 100%;
    border: 0;
}

.wechat-list .info .desc {
    overflow: hidden;
}

.wechat-list .info .desc-time {
    float: right;
    color: #b2b2b2;
}

.wechat-list .item .handle {
    position: absolute;
    z-index: 1;
    height: 100%;
    right: 0;
    top: 0;
    display: flex;
}

.wechat-list .item .handle>div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c7c7cc;
    color: #ffffff;
    font-size: 18px;
    padding: 0 12px;
}

.wechat-list .item .handle .handle-del {
    background-color: #ff3b30;
}

.desc-title {
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    color: #000;
}

.desc-message {
    height: 23px;
    line-height: 23px;
    font-size: 14px;
    color: #888888;
}

.wechat-list .info .desc-mute {
    float: right;
    color: #b8b8b8;
    font-size: 14px;
}

.wechat-list .info.active .desc-mute {
    color: #b9b9b9;
}

._line-fine:before {
    z-index: 3;
    left: 8px;
}
.chat-item-transition{
    height: 64px;
    transition: .3s height ease;
}
.chat-item-leave{
    height: 0;
    overflow: hidden;
}
</style>

