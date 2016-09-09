<template>
    <div class="_full_inner _scroll _effect"
        :class="animatiion_out?'_effect--30':''">
        <search-bar :search-id='"abc"'></search-bar>
        <ul class="wechat-list">
            <li class="item _line-fine" v-for="item in wechat_list">
                <div class="info"
                :class="{'current':currentIndex==$index}"
                v-touch:swipeleft="item_eLeft($event,$index)"
                v-touch-options:swipe="{ direction: 'horizontal' }">

                    <div class="ico-box">
                        <i
                        :class="item.base | f_news 'nclass'"
                        v-text="item.base | f_news 'ntext'"
                        v-show="item.base | f_news 'nshow'"></i>
                        <div class="ico">
                            <img asrc="../assets/images/friend-pic02.jpg" :src="item.base.iconSrc" title="../assets/images/friend-pic02.jpg" alt="pic">
                        </div>
                    </div>
                    <div class="desc">
                        <div class="desc-time" v-text="item.base.endTimeStr | fmtDate 'hh:ss'"></div>
                        <div class="desc-title" v-text="item.base.chatTitle"></div>
                        <div class="desc-message">
                            <div class="desc-mute iconfont icon-mute" v-show="item.base.newsMute"></div>
                            <span
                            v-show="item.base.type==='group'||item.base.type==='sub'"
                            v-text="item.base.endChatAuth+':'"></span>
                            <span v-text="item.base.endChatTxt"></span>
                        </div>
                    </div>
                </div>
                <div class="handle">
                    <div class="handle-unread"  data-id="item.base.id">标为未读</div>
                    <div class="handle-del" data-id="item.base.id">删除</div>
                </div>
            </li>
        </ul>
    </div>
    <!-- router -->
    <router-view transition="cover" keep-alive></router-view>
</template>
<script>
import utils from 'utils'
import {
    get_menu_wechat_list,
    set_dialogue_bar,
    set_dialogue_id,
    set_dialogue_type
    } from '../vuex/action.js'

import searchBar from '../components/search-bar.vue'
export default {
    vuex:{
        getters:{
            wechat_list:state=>state.wechat_list
        },
        actions:{
            get_menu_wechat_list,
            set_dialogue_type,
            set_dialogue_id,
            set_dialogue_bar
        }
    },
    mixins:[utils],
    route:{

    },
    data() {
        return {
            animatiion_out: false,
            currentIndex:-1,//列表item处在左划状态
            touchSwipe:false,//验证是否处于左划状态
            touchInvalid:false//为true的时候touch无效,(touchmove,touchcancel的时候为true)
        }
    },
    events:{
        'route-pipe'(_out){
            this.animatiion_out = _out
            this.$parent.$emit('route-pipe',_out)
        }
    },
    methods: {
        item_eLeft: function(e,_index) {
            $(".item .info").removeClass('active')
            event.stopPropagation()
            if(!this.touchSwipe){
                this.touchSwipe = true
                this.currentIndex = _index
            }else{
                this.touchSwipe = false
            }
        }
    },
    filters:{
        f_news:function(base,attr){
            let newsClass = base.newsMute?'_news-dot':'_news-count'
            let newsText = !base.newsMute?base.newsUnreadCount:''
            let newsShow = (base.newsUnreadCount>0)
            let o = {
                nclass:newsClass,
                ntext:newsText,
                nshow:newsShow
            }
            return o[attr]
        }
    },
    compiled(){
        this.get_menu_wechat_list()
    },
    components: {
        searchBar
    },
    ready(){
        let self = this
        /*
        手势:touchend  之前没有 touchmove,touchmove 的时候 router.go
        手势:swipeLeft .current
        状态:已左划 的时候载 执行左划或者touch(start,end)事件都不生效只会恢复默认
        状态:touchstart,但touchend不在当前元素会不进行跳转

        缺点:不好的交互,多手指touchstart会造成不好的交互

        */
        $(".wechat-list").on("touchstart",".item .info",function(){
                self.currentIndex = -1
                self.touchInvalid = false
                if($(".tips-menu").hasClass('tips-open')){
                    self.touchSwipe = true
                    $(".tips-menu").removeClass('tips-open')
                }
                if(!self.touchSwipe){
                    $(this).addClass('active')
                }
        })
        $(".wechat-list").on("touchmove",".item .info",function(){
            self.touchInvalid = true
        })
        $(".wechat-list").on("touchcancel",".item .info",function(){
            $(this).removeClass('active')
            self.touchInvalid = true
        })
        $(".wechat-list").on("touchend",".item .info",function(){
            $(this).removeClass('active')
            if(!!self.touchSwipe){
                self.touchSwipe = false
            }else{
                if(!self.touchInvalid){
                    this.touchSwipe = true;
                    self.$router.go({path:"/chat/dialogue"});
                    self.set_dialogue_id(1)
                    self.set_dialogue_bar('dialogueBar')
                    self.set_dialogue_type('group')
                    // self.set_dialogue_bar('dialogueBarPerson')
                    //dialogueBar dialogueBarPerson
                    // self.dialogue_chat_bar
                }
            }
        })
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

.wechat-list .item .info.active {
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
    background: #d6d5d3;
}

.wechat-list .info .ico {
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
}

.wechat-list .info .ico img {
    width: 100%;
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
    color: #d9d9d9;
}

.wechat-list .info.active .desc-mute {
    color: #b9b9b9;
}



._line-fine:before {
    z-index: 3;
    left: 8px;
}
</style>

