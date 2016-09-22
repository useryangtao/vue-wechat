<template>
    <div class="_full_router component-drift-bottle">
        <div class="_full_inner">
            <top-handle :back-text="topModel.backText" :cur-text="topModel.curText" :decline="decline" :next-path="topModel.nextPath" :next-icon="topModel.nextIcon">
            </top-handle>
            <div class="_cover-content _effect" :class="{'_effect--30':decline}">
                <div class="drift-bottle-panel">
                    <div class="mobile-hand"></div>
                </div>
                <ul class="drift-bottle-footer">
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
                type: 'throw',
                name: '扔一个',
            }, {
                type: 'pickup',
                name: '捡一个',
            }, {
                type: 'bottle',
                name: '我的瓶子',
            }],

            topModel: {
                backText: '发现',
                curText: '漂流瓶',
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
    background-image: url(../../assets/images/drift-bottle/bottle-bkg.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.drift-bottle-panel {
    height: calc(100% - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.drift-bottle-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0px;
    width: 100%;
    left: 0;
    color: #ffffff;
    background-image:url(../../assets/images/drift-bottle/bottle-board.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
}

.drift-bottle-footer li {
    text-align: center;
}

.drift-bottle-footer li div {
    width: 70px;
    height: 70px;
    margin :0 auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}


.drift-bottle-footer li.throw div{
    background-image: url(../../assets/images/drift-bottle/bottle-button-throw.png);
}
.drift-bottle-footer li.pickup div{
    background-image: url(../../assets/images/drift-bottle/bottle-button-fish.png);
}
.drift-bottle-footer li.bottle div{
    background-image: url(../../assets/images/drift-bottle/bottle-button-mine.png);
}

</style>
