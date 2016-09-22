<template>
    <div class="_cover-top">
        <div class="other">
            <span class="iconfont icon-tips-jia" v-show="$route.path==='/chat'" v-touch:tap="tap"></span>
            <span class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'" v-link='{path:"/contact/add-friends"}'></span>
            <ul class="tips-menu" :class="tips_isOpen?'tips-open':'tips-close'">
                <li v-for="item in menuArr" v-link="item._link">
                    <span class="iconfont" :class="item.iconClass"></span>
                    <div v-text="item.text"></div>
                </li>
            </ul>
            <div class="tips-masker" v-show="tips_isOpen"></div>
        </div>
        <div class="center">
            {{menu_active.text}}
            <span class="parentheses" v-show='chatCount' v-text="index_nav[0].hint.count"></span>
        </div>
    </div>
</template>
<script>
import {
    menu_active,
    index_nav
} from 'getters'
export default {
    vuex: {
        getters: {
            index_nav,
            menu_active
        }
    },
    data() {
        return {
            tips_isOpen: false,
            menuArr: [{
                _link: {
                    path: 'group-chat', //create-group-chat
                    append:true
                },
                text: '发起群聊',
                iconClass: 'icon-tips-xiaoxi'
            }, {
                _link: {
                    path: 'add-friends',
                    append:true
                },
                text: '添加朋友',
                iconClass: 'icon-tips-add-friend'
            }, {
                _link: {
                    path: 'sao-yi-sao',
                    append:true
                },
                text: '扫一扫',
                iconClass: 'icon-tips-saoyisao'
            }, {
                _link: {
                    path: 'receipt-payment-money',
                    append:true
                },
                text: '收付款',
                iconClass: 'icon-tips-fukuan'
            }]
        }
    },
    computed:{
        chatCount(){
            return  this.menu_active.text==="微信" && this.index_nav[0].hint.count > 0
        }
    },
    created() {
        var self = this;
        $('body').on('touchend', function() {
            setTimeout(() => {
                self.tips_isOpen = false;
            }, 0)
        })
    },
    methods: {
        tap() {
            event.stopPropagation();
            this.tips_isOpen = !this.tips_isOpen
        }

    }
}
</script>
<style scoped>
.center {
    margin: 0 auto;
    text-align: center;
}

.other {
    position: absolute;
    right: 15px;
}

.other .iconfont {
    font-size: 22px;
}

.other .tips-masker {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    top: 45px;
    bottom: 50px;
}

.other .tips-menu {
    position: absolute;
    z-index: 2;
    width: 133px;
    font-size: 16px;
    right: -10px;
    top: 54px;
    text-align: left;
    border-radius: 2px;
    background-color: #49484b;
    padding: 0 15px;
    transform-origin: 90% 0%;
}

.tips-open {
    transition: initial;
    opacity: 1;
}

.tips-close {
    opacity: 0;
    transition: .2s opacity ease, .6s transform ease;
    transform: scale(0);
}

.other .tips-menu li {
    position: relative;
    height: 40px;
    line-height: 40px;
}

.other .tips-menu li:not(:last-child)::after {
    content: "";
    width: 200%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: #5b5b5d;
    transform: scale(.5);
    transform-origin: 0 100%;
}

.other .tips-menu::before {
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    right: 15px;
    content: "";
    border-width: 0 6px 8px;
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #49484b rgba(0, 0, 0, 0);
    border-style: solid;
}

.other .tips-menu .iconfont {
    float: left;
    font-size: 16px;
}

.other .tips-menu .iconfont {
    margin-right: 15px;
}
</style>
