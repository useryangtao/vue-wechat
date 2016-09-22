<template>
    <div class="_full_router component-yao-yi-yao">
        <div class="_full_inner">
            <top-handle :back-text="topModel.backText" :cur-text="topModel.curText" :decline="decline" :next-path="topModel.nextPath" :next-icon="topModel.nextIcon">
            </top-handle>
            <div class="_cover-content _effect" :class="{'_effect--30':decline}">
                <div class="yao-yi-yao-panel">
                    <div class="mobile-hand"></div>
                </div>
                <ul class="yao-yi-yao-footer">
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
                type: 'people',
                name: '人',
            }, {
                type: 'music',
                name: '歌曲',
            }, {
                type: 'tv',
                name: '电视',
            }],

            topModel: {
                backText: '返回',
                curText: '摇一摇',
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
    background-color: #2d3031;
}

.yao-yi-yao-panel {
    height: calc(100% - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.yao-yi-yao-panel .mobile-hand{
    margin-top: -20%;
    width: 50%;
    padding-top: 50%;
    background-image: url(../../assets/images/yao-yi-yao/mobile-hand.png);
    background-repeat:no-repeat;
    background-position: center center;
    background-size: contain;
}

.yao-yi-yao-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    width: 100%;
    left: 0;
}

.yao-yi-yao-footer li {
    text-align: center;
    padding: 0 20px;
}

.yao-yi-yao-footer li div {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
    background-size: contain;
    background-repeat: no-repeat;
}


.yao-yi-yao-footer li.people div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_people.png);
}
.yao-yi-yao-footer li.music div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_music.png);
}
.yao-yi-yao-footer li.tv div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_tv.png);
}

.yao-yi-yao-footer li.people.current div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_people-hl.png);
}
.yao-yi-yao-footer li.music.current div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_music-hl.png);
}
.yao-yi-yao-footer li.tv.current div{
    background-image: url(../../assets/images/yao-yi-yao/shake_icon_tv-hl.png);
}

</style>
