<template>
    <div class="_full_router component-sao-yi-sao">
        <div class="_full_inner">
            <top-handle :back-text="topModel.backText" :cur-text="menu[current].title" :decline="decline" :next-path="topModel.nextPath" :next-icon="topModel.nextIcon">
            </top-handle>
            <div class="_cover-content _effect" :class="{'_effect--30':decline}">
                <div class="sao-yi-sao-panel">
                    <div :class="menu[current].type">
                        <div class="frame">
                            <span class="green-line"></span>
                            <span class="left-top"></span>
                            <span class="right-top"></span>
                            <span class="left-bottom"></span>
                            <span class="right-bottom"></span>
                        </div>
                        <div class="desc">
                            <p v-text="menu[current].text"></p>
                        </div>
                    </div>
                </div>
                <ul class="sao-yi-sao-footer">
                    <li v-for="item in menu" :class="[item.type,{'current':current===$index}]" v-touch:tap='chooseItem($index)'>
                        <div></div>
                        <p v-text="item.name"></p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- router -->
        <router-view transition="cover"></router-view>
    </div>
</template>
<script>
// import {} from 'getters'
// import {} from 'actions'

import topHandle from 'topHandle'

export default {
    vuex: {
        getters: {

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
            //do something...
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
            decline: false,
            current: 0,
            menu: [{
                type: 'scan-qr-code',
                name: '扫码',
                title: '二维码/条码',
                text: '将二维码/条码放入框内,即可自动扫描'
            }, {
                type: 'scan-book',
                name: '封面',
                title: '封面/电影海报',
                text: '讲书、CD、电影海报放入框内,即可自动扫描'
            }, {
                type: 'scan-street',
                name: '街景',
                title: '街景',
                text: '扫一下周边环境,即可自动扫描'
            }, {
                type: 'scan-word',
                name: '翻译',
                title: '翻译',
                text: '将英文单词放入框内'
            }],

            topModel: {
                backText: '返回',
                curText: '二维码/条码',
                nextPath: {
                    path: ''
                },
                nextIcon: ''
            }
        }
    },
    methods: {
        chooseItem(index) {
            this.current = index;
        }
    },
    events: {
        'route-pipe' (_decline) {
            this.decline = _decline
            this.$parent.$emit('route-pipe', _decline)
        }
    },
    created() {

    },
    ready() {

    },
    components: {
        topHandle
    },
}
</script>
<style scoped>
._cover-content {
    color: #979797;
    background-color: #000000;
}


/**/

.sao-yi-sao-panel {
    height: calc(100% - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.sao-yi-sao-panel>div{
    width: 100%;
}

.sao-yi-sao-panel .frame {
    width: 200px;
    height: 200px;
    transform-origin: 50% 50%;
    margin: 0 auto;
    margin-bottom: 15px;
    transition: .5s all ease;
    border: 1px solid #b3b3b3;
    position: relative;
}

.sao-yi-sao-panel .frame .green-line {
    position: absolute;
    left: 2%;
    top: 2%;
    width: 96%;
    height: 1px;
    background: -webkit-radial-gradient(#72e52d 5%, #54cf21 50%, #0a4a04 80%, #000000 100%);
    box-shadow: 0px 0px 2px rgba(96, 255, 0, .5);

    animation-name: linemove;
    animation-duration: 1500ms;
    animation-delay: 300ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-name: linemove;
    -webkit-animation-duration: 1500ms;
    -webkit-animation-delay: 300ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
}

@-webkit-keyframes linemove {
    0% {
        top: 2%;
    }
    100% {
        top: 95%;
        opacity:1;
    }
}
@keyframes linemove {
    0% {
        top: 2%;
    }
    100% {
        top: 95%;
        opacity:1;
    }
}

.sao-yi-sao-panel .scan-qr-code .frame {
    width: 70%;
    padding-top: 70%;
    height: 0;
}

.sao-yi-sao-panel .scan-book .frame {
    width: 90%;
    padding-top: 100%;
    height: 0;
}

.sao-yi-sao-panel .scan-street .frame {
    width: 90%;
    padding-top: 100%;
    height: 0;
}

.sao-yi-sao-panel .scan-word .frame {
    width: 50%;
    height: 50px;
}

.sao-yi-sao-panel .frame .left-top {
    position: absolute;
    left: -1px;
    top: -1px;
}

.sao-yi-sao-panel .frame .left-top::before {
    content: "";
    display: block;
    width: 14px;
    height: 2px;
    background-color: #09bb07;
}

.sao-yi-sao-panel .frame .left-top::after {
    content: "";
    display: block;
    width: 2px;
    height: 14px;
    background-color: #09bb07;
    margin-left: 0px;
    margin-top: -2px;
}

.sao-yi-sao-panel .frame .right-top {
    position: absolute;
    right: -1px;
    top: -1px;
}

.sao-yi-sao-panel .frame .right-top::before {
    content: "";
    display: block;
    width: 14px;
    height: 2px;
    background-color: #09bb07;
}

.sao-yi-sao-panel .frame .right-top::after {
    content: "";
    float: right;
    display: block;
    width: 2px;
    height: 14px;
    background-color: #09bb07;
    margin-left: 0px;
    margin-top: -2px;
}

.sao-yi-sao-panel .frame .left-bottom {
    position: absolute;
    left: -1px;
    bottom: -1px;
}

.sao-yi-sao-panel .frame .left-bottom::before {
    content: "";
    display: block;
    width: 2px;
    height: 14px;
    background-color: #09bb07;
    margin-left: 0px;
    margin-top: -2px;
}

.sao-yi-sao-panel .frame .left-bottom::after {
    content: "";
    display: block;
    width: 14px;
    height: 2px;
    background-color: #09bb07;
}

.sao-yi-sao-panel .frame .right-bottom {
    position: absolute;
    right: -1px;
    bottom: -1px;
}

.sao-yi-sao-panel .frame .right-bottom::before {
    content: "";
    display: block;
    width: 2px;
    height: 14px;
    background-color: #09bb07;
    margin-left: 12px;
}

.sao-yi-sao-panel .frame .right-bottom::after {
    float: left;
    content: "";
    display: block;
    width: 14px;
    height: 2px;
    background-color: #09bb07;
}


/**/

.sao-yi-sao-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    width: 100%;
    left: 0;
}

.sao-yi-sao-footer li {
    text-align: center;
    padding: 0 10px;
}

.sao-yi-sao-footer li div {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
    background-size: contain;
    background-repeat: no-repeat;
}

.sao-yi-sao-footer li.current p {
    color: #09bb07;
}

.sao-yi-sao-footer li.scan-qr-code div {
    background-image: url(../../assets/images/sao-yi-sao/scan-qr-code.png);
}

.sao-yi-sao-footer li.scan-qr-code.current div {
    background-image: url(../../assets/images/sao-yi-sao/scan-qr-code_hl.png);
}

.sao-yi-sao-footer li.scan-book div {
    background-image: url(../../assets/images/sao-yi-sao/scan-book.png);
}

.sao-yi-sao-footer li.scan-book.current div {
    background-image: url(../../assets/images/sao-yi-sao/scan-book_hl.png);
}

.sao-yi-sao-footer li.scan-street div {
    background-image: url(../../assets/images/sao-yi-sao/scan-street.png);
}

.sao-yi-sao-footer li.scan-street.current div {
    background-image: url(../../assets/images/sao-yi-sao/scan-street_hl.png);
}

.sao-yi-sao-footer li.scan-word div {
    background-image: url(../../assets/images/sao-yi-sao/scan-word.png);
}

.sao-yi-sao-footer li.scan-word.current div {
    background-image: url(../../assets/images/sao-yi-sao/scan-word_hl.png);
}

.sao-yi-sao-footer li.scan-word .frame .green-line{
    display: none;
}
</style>
